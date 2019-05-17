require("dotenv").config();

module.exports = {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  SECRET: process.env.SECRET,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASS: process.env.POSTGRES_PASS,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  STATUS_DB: process.env.STATUS_DB,
  HEALTHCHECK_PATH_FRONT_END: process.env.HEALTHCHECK_PATH_FRONT_END,
  HEALTHCHECK_PATH_BACK_END: process.env.HEALTHCHECK_PATH_BACK_END
}