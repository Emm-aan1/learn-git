const express = require('express')
const PORT = 3000
const app = express()
const morgan = require('morgan')

// routing from route 
const { getPost } = require("./route/post")

// // my own middleware
// const myMiddleWare = (req, res, next) => {
//   console.log("Middleware applied!!!");
//   next()
// }

// middleware
app.use(morgan("dev"))
// app.use(myMiddleWare)

app.get('/', getPost)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})