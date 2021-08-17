const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: new Date()
  }
});
const Article = mongoose.model("Article", schema, "articles");
module.exports = Article;
