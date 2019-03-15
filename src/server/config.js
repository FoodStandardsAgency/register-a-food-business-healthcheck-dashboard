require("dotenv").config();

module.exports = {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  SECRET: process.env.SECRET,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASS: process.env.POSTGRES_PASS,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  TEST_STATUS_DB: process.env.TEST_STATUS_DB,
  STAGING_STATUS_DB: process.env.STAGING_STATUS_DB,
  PROD_STATUS_DB: process.env.PROD_STATUS_DB
}