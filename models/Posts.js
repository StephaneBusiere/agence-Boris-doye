var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String, 
  post_description: String, 
  author: String 
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;