"use strict"

const { findById } = require("../services/apikey.service")

const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
}

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString()
    console.log("key: ", key)

    if (!key) {
      return res.status(403).json({
        message: "Forbidden Error4",
      })
    }

    // check objKey
    const objKey = await findById(key)

    if (!objKey) {
      return res.status(403).json({
        message: "Forbidden error3",
      })
    }

    req.objKey = objKey
    return next()
  } catch (error) {
    console.error(error.message)
  }
}

const permission = (permission) => {
  return (req, res, next) => {
    console.log("objKey:: ", req.objKey)
    if (!req.objKey.permissions) {
      return res.status(403).json({
        message: "Permission denied!2",
      })
    }

    console.log("permission::", req.objKey.permission)

    const validPermission = req.objKey.permissions.includes(permission)

    if (!validPermission) {
      return res.status(403).json({
        message: "Permission denied!1",
      })
    }

    return next()
  }
}

module.exports = {
  apiKey,
  permission,
}
