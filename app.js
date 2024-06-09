const express = require('express')
const morgan = require('morgan')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// routing from route 
const postRoutes = require("./routes/post")

// // my own middleware
// const myMiddleWare = (req, res, next) => {s
//   console.log("Middleware applied!!!");
//   next()
// }

// middleware
// app.use(myMiddleWare)
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use('/', postRoutes)

// Error handling for unknown routes
app.all('*', (req, res) => {
  res.status(404).send('Error Page: WRONG ROUTE');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})
