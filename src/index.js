const express = require("express");
const connect = require("./config/database");
const Tweet = require("./models/tweet");
const app = express();

const TweetRepository = require("./repository/tweet-repository");

app.listen(3000, async () => {
  console.log("connected port to 3000");
  connect();
  const repo = new TweetRepository();

  const tweet = await repo.destory("6594587f379921a383641c78");
  console.log(tweet);
});
