const fs = require('fs');
const logopass = require('../../dbconfig');

module.exports = {
  development: {
    username: logopass.login,
    password: logopass.pass,
    database: 'metrica',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    username: logopass.login,
    password: logopass.pass,
    database: 'metrica',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  }
};