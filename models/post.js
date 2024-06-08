const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20
  },
  body: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Post", postSchema)