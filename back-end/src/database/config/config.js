require('dotenv').config();

const opt = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DATABASE || 'delivery-app',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
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
