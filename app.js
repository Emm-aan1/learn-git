const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// routing from route 
const postRoutes = require("./routes/post")

// // my own middleware
// const myMiddleWare = (req, res, next) => {
//   console.log("Middleware applied!!!");
//   next()
// }

// middleware
app.use(morgan("dev"))
// app.use(myMiddleWare)

app.use(bodyParser.json())
app.use('/', postRoutes)

app.all("*", (req, res) => {
  res.send("Error Page: WRONG ROUTE")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})