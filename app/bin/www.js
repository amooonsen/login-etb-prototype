"use strict"

const app = require("../app")
const PORT = 3000

app.listen(PORT, () => {
  console.log('서버 구동')
  console.log('http://localhost:3000')
})