import { TweetRepository, HashTagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashTagRepository = new HashTagRepository();
  }

  async create(data) {
    const content = data.content;

    let tags = content.match(/#[a-zA-Z0-9_]+/g); // regex for handling the hashtags in the string.
    tags = tags.map((tag) => tag.substring(1)).map((t) => t.toLowerCase());
    // console.log(tags);
    const tweet = await this.tweetRepository.create(data); // NOTE: creating the tweet
    // TODO: create hashtag and add here.
    // THINK: need not to create those hashtag which are already present.

    let alreadyPresentTags = await this.hashTagRepository.findByName(tags);
    // console.log(alreadyPresentTags);
    let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
    let newTags = tags.filter((t) => !titleOfPresentTags.includes(t));
    newTags = newTags.map((t) => {
      return {
        title: t,
        tweets: [tweet.id],
      };
    });

    await this.hashTagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });

    // WARN: need to do add hashtag array in the tweets db.
    return tweet;
  }
}

// HACK:  bulcreate |
// 2. Filter title of hashtag based on multiple tags. *** expensive query ***
// 3. How to add tweet ID inside all the hashtags.
// > downtime for hashtag to appear in search.

export default TweetService;
