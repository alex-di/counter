const http = require('http')
,     config = require('./config')
,     redis = require('redis')

let storage = redis.createClient(config.REDIS)
const { promisify } = require('util')
,     get = promisify(storage.get).bind(storage)
,     incr = promisify(storage.incr).bind(storage)


http.createServer(config.SERVER, (req, res) => {

  if (req.url !== '/') {
    res.writeHead(404)
    return res.end()
  }

  Promise.all([
    get('time'),
    get('counter')
  ])
  .then(([ time, counter ]) => {
    let now = new Date
    ,   current = now.getMinutes()

    time = parseInt(time)

    if (current !== time) {
      storage.set('time', current)
      storage.set('counter', 0)
      counter = 1
    }

    incr('counter')

    res.writeHead(200)
    res.write(counter.toString())
    res.end()
  })
}).listen(config.PORT)
