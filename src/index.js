const express = require("express");
const connect = require("./config/database");
const { Tweet } = require("./models/tweet");
const app = express();

const { HashTagRepository, TweetRepository } = require("./repository/index.js");

const { TweetService } = require("./service/index.js");
app.listen(3000, async () => {
  console.log("connected port to 3000");
  connect();

  const tweetService = new TweetService();
  const tweet = tweetService.create({
    content: "i am #excited and going to be #fun, #my new JOb #LoREM IPSUm",
  });
});
