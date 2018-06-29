var config = {
  PORT: 8080,
  SERVER: {},
  REDIS: {
    host: 'redis',
    port: '6379'
  }
}

if (process.env.PRODUCTION)
  Object.assign(config, {
    PRODUCTION: true
  })
module.exports = config
