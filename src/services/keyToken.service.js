"use strict"

const keytokenModel = require("../models/keytoken.model")

class KeyTokenService {
  // way 1
  // static createKeyToken = async ({ userId, publicKey }) => {
  //   try {
  //     // const publicKeyString = publicKey.toString()
  //     console.log("Check KeyTokenService: ", typeof publicKey)
  //     const tokens = await keytokenModel.create({
  //       user: userId,
  //       // publicKey: publicKeyString.toString(),
  //       publicKey: publicKey,
  //     })

  //     console.log("tokens: ", tokens)

  //     return tokens ? tokens.publicKey : null
  //   } catch (error) {
  //     return error
  //   }
  // }

  // way 2
  static createKeyToken = async ({ userId, publicKey, privateKey }) => {
    try {
      const tokens = await keytokenModel.create({
        user: userId,
        publicKey,
        privateKey,
      })

      return tokens ? tokens.publicKey : null
    } catch (error) {
      return error
    }
  }
}

module.exports = KeyTokenService
