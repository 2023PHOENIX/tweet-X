import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  console.log(req.headers["authorization"]);
  try {
    const response = await tweetService.create(req.body);
    return res.status(200).json({
      success: true,
      message: "successfully created new tweet",
      data: response,
      err: {},
    });
  } catch (e) {
    console.log(e.message);
    return res.status(200).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: e,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "successfully fetched a tweet",
      data: response,
      err: {},
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: e,
    });
  }
};
