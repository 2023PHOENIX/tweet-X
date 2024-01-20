import UserRepository from "../repository/user-repository.js";
import UserService from "../service/user-service.js";

const userService = new UserService();
export const signup = async (req, res) => {
  try {
    console.log(req.body.email, req.body.password, req.body.name);
    const response = await userService.signUp({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created new user",
      err: {},
      data: response,
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      data: {},
      success: false,
      err: e,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await userService.signIn(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully logged in",
      data: token,
      err: {},
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      data: {},
      success: false,
      err: e,
    });
  }
};
