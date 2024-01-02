const Tweet = require("./../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (e) {
      console.log(e);
    }
  }
  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (e) {
      console.log(e);
    }
  }
  async destory(id) {
    try {
      // :PROBLEM
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (e) {
      console.log(e);
    }
  }
  async update(id, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(id, data, { new: true });
      return tweet;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TweetRepository;
