var config = {
  PORT: 8080,
  SERVER: {}
}

if (process.env.PRODUCTION)
  Object.assign(config, {

  })
module.exports = config
