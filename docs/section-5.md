# creating shop.model.js

# download extension Mongo Snippets for Node-js

- !dmbg: generating schema db

# create routes folder

- index.js
- curl http://localhost:3052 (DEV_APP_PORT)

# create access folder

- index.js
- publickeyEncoding: type = pkcs1 => Public key CryptoGraphy standards

# create postman folder

- create access.post.http: post method
- Extension: REST Client - Huachao Mao
- Extension: HTTP Client - Marcel j.Kloubert

# writing function signup

- .lean(): trả về 1 pure object js
- install package brcypt
- install package crypto (node 19)

# Section 5: Reup Sign-up Shop (FULL) thuật toán RSA và JWT cho hai level bổ sung keyToken, authUtils

## keytoken.model.js:

- lưu lại id-user, public-key của user và refresh-token mà user đã sử dụng
- mục đích:
  > refreshToken: detect những token mà hacker đã dùng trái phép => xử lý trong model keytoken.model.js

## keyToken.service.js

- publicKey.toString() vì publicKey được sinh ra bởi thuật toán bất đối xứng => nó là buffer < chưa được hash > => cần parse sang string để tránh lỗi khi lưu vào DB

## creating public key: access.service.js

- publicKeyString
- creating auth folder
  > authUtils.js: createTokenPair
  > install package jsonwebtoken
  > install package lodash
- creating on utils folder
  > getInfoData

# How to implement server for Level 0, 1, 2...

- Để đơn giản, ko cần triển khai privateKey, publicKey bằng crypto.generateKeyPairSync (chỉ triển khai ở hệ thống lớn)

# Summarize:

> 1. Sign-up SHOP
> 2. JWT with RSA
> 3. JWT

# Video liên quan:

- 1 - Cách triển khai thuật toán CHẶN HACKER chiếm JWT cho dù đánh cắp KEYSECRET trong database | JWT [ https://youtu.be/pK3oBX0vB38 ]
