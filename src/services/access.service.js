"use strict"

const shopModel = require("../models/shop.model")
const bcrypt = require("bcrypt")
// const crypto = require("crypto")
const crypto = require("node:crypto")
const KeyTokenService = require("./keyToken.service")
const { createTokenPair } = require("../auth/authUtils")
const { getInfoData } = require("../utils")

const RoleShop = {
  SHOP: "SHOP",
  WRITTER: "WRITTER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
}

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // step 1: check email is exists ?
      const holderShop = await shopModel.findOne({ email }).lean()

      if (holderShop) {
        return {
          code: "500",
          message: "Shop alread registered!",
        }
      }

      const saltRounds = 10
      // const salt = await bcrypt.genSalt(saltRounds)
      const passwordHash = await bcrypt.hash(password, saltRounds)

      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      })

      console.log("newShop: ", newShop)

      if (newShop) {
        // way 1: created privateKey, publicKey => only implementing for large system
        // const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
        //   modulusLength: 4096,
        //   publicKeyEncoding: {
        //     type: "pkcs1",
        //     format: "pem",
        //   },
        //   privateKeyEncoding: {
        //     type: "pkcs1",
        //     format: "pem",
        //   },
        // })

        // console.log({ privateKey, publicKey }) // save collection KeyStore

        // way 2: created privateKey, publicKey => more simple way
        const privateKey = crypto.randomBytes(64).toString("hex")
        const publicKey = crypto.randomBytes(64).toString("hex")

        // way 1
        // const publicKeyString = await KeyTokenService.createKeyToken({
        //   userId: newShop._id,
        //   publicKey: publicKey,
        // })

        // way 2 => more simple way
        const keyStore = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
          privateKey,
        })

        // way 1
        // if (!publicKeyString) {
        //   return {
        //     code: "500",
        //     message: "publicKeyString error",
        //   }
        // }

        // way 2
        if (!keyStore) {
          return {
            code: "500",
            message: "keyStore error",
          }
        }

        // way 1
        // const publicKeyObject = crypto.createPublicKey(publicKeyString)

        // way 1: creating token pair
        // const tokens = await createTokenPair(
        //   { userId: newShop._id, email },
        //   publicKeyString,
        //   privateKey
        // )

        // way 2
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          publicKey,
          privateKey
        )

        console.log(`Created Token Success::`, tokens)

        return {
          code: 201,
          metadata: {
            shop: getInfoData({
              fields: ["_id", "name", "email"],
              object: newShop,
            }),
            tokens,
          },
        }
      }

      return {
        code: 200,
        metadata: null,
      }
    } catch (error) {
      console.error(error)
      return {
        code: "500",
        message: error.message,
        status: "access service error",
      }
    }
  }
}

module.exports = AccessService
