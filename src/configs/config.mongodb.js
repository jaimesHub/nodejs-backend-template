"use strict"

// level 0
// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     hostname: "jaimes",
//     password: encodeURIComponent("Fsoft@123123"),
//     port: 27017,
//     dbname: "shopDEV",
//   },
// };

// level 1

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    hostname: process.env.DEV_DB_HOSTNAME || "jaimes",
    password: encodeURIComponent(process.env.DEV_DB_PASSWORD),
    port: process.env.DEV_DB_PORT || 27017,
    dbname: process.env.DEV_DB_DBNAME || "shopDEV",
  },
}

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 3000,
  },
  db: {
    hostname: process.env.PRO_DB_HOSTNAME || "jaimes",
    password: encodeURIComponent(process.env.PRO_DB_PASSWORD),
    port: process.env.PRO_DB_PORT || 27017,
    dbname: process.env.PRO_DB_DBNAME || "shopDEV_pro",
  },
}

const config = { dev, pro }
const env = process.env.NODE_ENV || "dev"
console.log(config[env], env)
module.exports = config[env]
