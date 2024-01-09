import express from "express";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js";
import bodyParser from "body-parser";

import { LikeService, TweetService } from "./service/index.js";
import Tweet from "./models/tweet.js";
import UserRepository from "./repository/user-repository.js";
import TweetRepository from "./repository/tweet-repository.js";

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("connected port to 3000");
  connect();
  const tweetRepo = new TweetRepository();
  const userRepo = new UserRepository();
  // userRepo.create({
  //   email: "phoenix@gmail.com",
  //   name: "phoenix",
  //   password: "phoenix",
  // });
  // // const tweetRepo = new TweetService();
  // tweetRepo.create({ content: "this is #PHOENIX" });
  // const tweets = await tweetRepo.getAll(0, 10);
  // const users = await userRepo.getAll();
  // const likeService = new LikeService();
  // console.log(users[0].id);
  // await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});
