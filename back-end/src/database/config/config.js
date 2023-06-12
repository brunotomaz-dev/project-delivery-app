require('dotenv').config();

const opt = {
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  database: process.env.MYSQLDATABASE || 'delivery-app',
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

const config = {
  development: opt,
  test: opt,
  production: opt,
};

module.exports = config;
