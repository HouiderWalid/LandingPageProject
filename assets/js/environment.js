export function getVariables(host_name = null) {
  let variables = {}
  if (process.client) host_name = window.location.hostname
  switch (true) {
    case /localhost/.test(host_name):
      variables.API = 'http://mcn-apis.test/api/'
      variables.REDIS_HOST = '127.0.0.1'
      variables.REDIS_DB = 0
      variables.PAGE_DEFAULT_DOMAIN = 'localhost'
      break
    case /^dev\..*/.test(host_name):
      variables.API = 'https://dev-api.maxcom.network/api/'
      variables.REDIS_HOST = 'elasicach-redis.tx8ln5.ng.0001.usw2.cache.amazonaws.com'
      variables.REDIS_DB = 6 // dev takes dbs from 6 and above
      variables.PAGE_DEFAULT_DOMAIN = 'dev.maxcomoffers.com'
      break
    default:
      variables.API = 'https://api.maxcom.network/api/'
      variables.REDIS_HOST = 'elasicach-redis.tx8ln5.ng.0001.usw2.cache.amazonaws.com'
      variables.REDIS_DB = 0 // prod takes from 5 and below
      variables.PAGE_DEFAULT_DOMAIN = 'maxcomshop.com'
  }
  return variables
}
