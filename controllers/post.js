const Post = require("../models/post");

let posts = [];

// Handler for getting posts
exports.getPost = (req, res) => {
  res.json({ posts });
};

// Handler for creating a post
exports.createPost = (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body
  };
  posts.push(post);
  res.status(201).json({
    message: 'Post created successfully',
    data: post,
  });
};

