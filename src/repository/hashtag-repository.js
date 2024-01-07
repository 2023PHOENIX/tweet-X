import HashTag from "../models/hashtags.js";

class HashTagRepository {
  async create(data) {
    try {
      const tag = await HashTag.create();
      return tag;
    } catch (e) {
      console.log(e);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await HashTag.insertMany(data); // we have to pass []

      return tags;
    } catch (e) {
      console.log(e);
    }
  }
  async get(id) {
    try {
      const tag = await HashTag.findById(id);
      return tag;
    } catch (e) {
      console.log(e);
    }
  }
  async destory(id) {
    try {
      const tag = await HashTag.findByIdAndRemove(id);
      return tag;
    } catch (e) {
      console.log(e);
    }
  }
  async findByName(titleList) {
    try {
      const tags = await HashTag.find({
        title: titleList,
      });
      return tags;
    } catch (e) {
      console.log(e);
    }
  }
}
export default HashTagRepository;
