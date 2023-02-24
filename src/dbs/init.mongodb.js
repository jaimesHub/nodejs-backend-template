"use strict"

const mongoose = require("mongoose")
const {
  db: { hostname, password, dbname },
} = require("../configs/config.mongodb")
const { countConnect } = require("../helpers/check.connect")

// Singleton Design Pattern
class Database {
  constructor() {
    this.connect()
  }

  // connect
  connect() {
    const connectString = `mongodb+srv://${hostname}:${password}@cluster0.wh22rm1.mongodb.net/${dbname}?retryWrites=true&w=majority`

    mongoose
      .connect(connectString, { maxPoolSize: 100 })
      .then((_) => {
        console.log(
          `Connected Mongodb Success [PRO] - number of connections: `,
          countConnect()
        )
      })
      .catch((err) => console.log(`Error Connection: `, err))

    // dev development
    if (1 === 1) {
      mongoose.set("debug", true)
      mongoose.set("debug", { color: true })
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
