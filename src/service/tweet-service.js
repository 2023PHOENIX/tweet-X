const { TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // regex for handling the hashtags in the string.
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);

    // TODO: create hashtag and add here.
    // THINK: need not to create those hashtag which are already present.
    //
    return tweet;
  }
}

// HACK:  bulcreate |
// 2. Filter title of hashtag based on multiple tags. *** expensive query ***
// 3. How to add tweet ID inside all the hashtags.
// > downtime for hashtag to appear in search.
module.exports = TweetService;
