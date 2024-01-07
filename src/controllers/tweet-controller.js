import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return response.status(200).json({
      success: true,
      message: "successfully created new tweet",
      data: response,
      err: {},
    });
  } catch (e) {
    return res.status(200).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: e,
    });
  }
};
