import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  // HACK: /api/v1/likes/toggle?id=modelId&type='Tweet'
  async toggleLike(modelId, modelType, userId) {
    if (modelType == "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
    } else if (modelType == "Comment") {
      // TODO: something need to be done.
    } else {
      throw new Error("unknown model type");
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    if (exists) {
      // problem is to remove the existing like from the tweet
      likeable.likes = likeable.likes.filter(
        (like) => !like.user.equals(exists.user),
      );
      await likeable.save();
      this.likeRepository.destory(exists._id);
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
