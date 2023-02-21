"use strict";

const mongoose = require("mongoose");

// const connectString = `mongodb://localhost:27017/shopDEV`;
const hostname = "jaimes";
const password = encodeURIComponent(".....");
const dbname = "shopDEV";
const connectString = `mongodb+srv://${hostname}:${password}@cluster0.wh22rm1.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose
  .connect(connectString)
  .then((_) => console.log(`Connected Mongodb Success`))
  .catch((err) => console.log(`Error Connection: `, err));

// dev development
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
