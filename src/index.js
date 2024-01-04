const express = require("express");
const connect = require("./config/database");
const { Tweet } = require("./models/tweet");
const app = express();

const { HashTagRepository, TweetRepository } = require("./repository/index.js");

app.listen(3000, async () => {
  console.log("connected port to 3000");
  connect();
  const repo = new HashTagRepository();
  await repo.bulkCreate([
    { title: "Trend", tweet: [] },
    { title: "MODI", tweet: [] },
  ]);
});
