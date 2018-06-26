import http from 'http'
import config from './config'
import Storage from './storage'
const COUNTER_KEY = 'counter'

var storage = new Storage()

http.createServer(config.SERVER, (req, res) => {
  storage.set(COUNTER_KEY, storage.get(COUNTER_KEY) + 1)
  res.writeHead(200)
  res.end(storage.get(COUNTER_KEY))
}).listen(config.PORT)
