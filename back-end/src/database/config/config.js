require('dotenv').config();

const opt = {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE,
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
