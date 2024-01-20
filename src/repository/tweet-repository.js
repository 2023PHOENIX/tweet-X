import Tweet from "./../models/tweet.js";
import CrudRepository from "./crud-repository.js";
// TODO: populate the chain of comments during the fetch.
class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (e) {
      console.log(e);
    }
  }
  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find({}).skip(offset).limit(limit);
      return tweets;
    } catch (e) {
      console.log(e);
    }
  }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "likes" });
      return tweet;
    } catch (e) {
      console.log(e);
    }
  }
}

export default TweetRepository;
