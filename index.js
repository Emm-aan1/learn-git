// console.log("Hello Git");

const express = require('express')
const PORT = 8000
const HOST = 'http://localhost'
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to NodeJs")
})

app.listen(PORT, () => {
  console.log(`Server running on: ${HOST}:${PORT}`)
})