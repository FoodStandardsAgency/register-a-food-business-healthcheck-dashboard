const {POSTGRES_USER, POSTGRES_PASS, POSTGRES_DB, POSTGRES_HOST } = require("../../config");

module.exports = {
  production: {
    username: POSTGRES_USER,
    password: POSTGRES_PASS,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    },
    keepAlive: true,
    logging: false
  },
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASS,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    }
  },
  local: {
    username: "postgres",
    password: process.env.POSTGRES_PASS,
    database: "postgres",
    host: "localhost",
    dialect: "postgres"
  }
};
