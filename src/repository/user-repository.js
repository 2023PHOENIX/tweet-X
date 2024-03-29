import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async findByUserAndLikeable(data) {
    try {
      const user = await User.findOne(data);
      return user;
    } catch (e) {
      throw e;
    }
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (e) {
      throw e;
    }
  }
}

export default UserRepository;
