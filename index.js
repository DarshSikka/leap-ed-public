const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const Article = require("./models/Article");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to db");
  }
);
app.get("/all", async (req, res) => {
  const { filter, cat } = req.query;
  const allArticles = await Article.find({ category: cat });
  console.log(allArticles);
  const sendThese = allArticles.filter((ele) => ele.title.includes(filter));
  res.send(sendThese);
});
app.get("/getbyid", async (req, res)=>{
  const {name}=req.query;
  const art=await Article.findOne({  title: name })
  res.send(art);
})
app.listen(port, console.log(`Listening on port ${port}`));
