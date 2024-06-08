const Post = require("../models/post")

exports.getPost = (req, res) => {
  res.json({
    posts: [
      { title: 'First post' },
      { title: 'Second post' }
    ]
  })
}

exports.createPost = (req, res) => {
  const post = new Post(req.body)
  // console.log("POST CREATED: ", req.body)

  post.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err: err
      })
    }
  })
}