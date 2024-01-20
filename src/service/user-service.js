import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (e) {
      throw e;
    }
  }

  async getUserByEmail({ email }) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (e) {
      throw e;
    }
  }

  async signIn(data) {
    try {
      const user = await this.getUserByEmail(data);
      if (!user) {
        throw {
          message: "user not found",
          success: false,
        };
      }

      if (!(await user.comparePassword(data.password))) {
        throw {
          message: "incorrect Password",
          success: false,
        };
      }

      const token = user.genJWT();
      return token;
    } catch (e) {
      throw e;
    }
  }
}
export default UserService;
