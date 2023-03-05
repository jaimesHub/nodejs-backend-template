"use strict"

const JWT = require("jsonwebtoken")

// way 1
// const createTokenPair = async (payload, publicKey, privateKey) => {
//   try {
//     // accessToken
//     const accessToken = await JWT.sign(payload, privateKey, {
//       algorithm: "RS256",
//       expiresIn: "2 days",
//     })

//     const refreshToken = await JWT.sign(payload, privateKey, {
//       algorithm: "RS256",
//       expiresIn: "7 days",
//     })

//     JWT.verify(accessToken, publicKey, (err, decode) => {
//       if (err) {
//         console.error(`error verify::`, err)
//       } else {
//         console.log(`decode verify::`, decode)
//       }
//     })

//     return { accessToken, refreshToken }
//   } catch (error) {}
// }

// way 2: more simple
const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    // accessToken
    const accessToken = await JWT.sign(payload, publicKey, {
      expiresIn: "2 days",
    })

    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: "7 days",
    })

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.error(`error verify::`, err)
      } else {
        console.log(`decode verify::`, decode)
      }
    })

    return { accessToken, refreshToken }
  } catch (error) {
    console.log("error::createTokenPair::", error)
    return error
  }
}

module.exports = {
  createTokenPair,
}
