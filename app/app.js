"use strict"

// module setting
const express = require('express')
const app = express()

// router setting
const home = require("./src/routes/home")

// 앱 세팅
// 초기 루트 설정
app.set("views", "./src/views")
app.set("view engine", "ejs")

// 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`))
app.use("/", home)

module.exports = app

// 왜 express를 사용하는지?
// express를 사용하지 않으면 모든 처리를 해줘야함.

// const http = require('http')
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
//   if (req.url === '/') {
//     res.end('루트 디렉토리')
//   } else if(req.url === '/login') {
//     res.end('로그인 화면')
//   } else {
//     res.end('지정되지 않은 url')
//   }
// })

// app.listen(3001, () => {
//   console.log('http로 가동된 서버')
// })