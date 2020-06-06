require("dotenv").config();

module.exports = {
  DASHBOARD_USERNAME: process.env.DASHBOARD_USERNAME,
  DASHBOARD_PASSWORD: process.env.DASHBOARD_PASSWORD,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASS: process.env.POSTGRES_PASS,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  STATUSDB_URL: process.env.STATUSDB_URL,
  HEALTHCHECK_PATH_FRONT_END: process.env.HEALTHCHECK_PATH_FRONT_END,
  HEALTHCHECK_PATH_BACK_END: process.env.HEALTHCHECK_PATH_BACK_END
};