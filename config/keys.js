const env = process.env.NODE_ENV || 'development';

module.exports =
  env === 'development'
    ? require('./dev')
    : require('./prod');
