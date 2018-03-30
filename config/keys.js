const prod = require('./prod');
const dev = require('./dev');

const env = process.env.NODE_ENV || 'development';

module.exports = env === 'production' ? prod : dev;
