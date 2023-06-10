import { createError } from "../utils/error.js";
import User from "../models/User.js";

export const register = async (req, res, next) => {

  const { userName, password, email } = await req.body;

  // const userExists = await User.findOne({ email });

  // if (userExists) return next(createError(400, "User already Exists"));

  try {
    const newUser = await User.create({
      userName,
      email,
      password
    });
    res.json(newUser);
  } catch (error) {
    throw Error(error);
  }
};

export const login = async (req, res, next) => {
  try {
    // const { userName, password } = await req.body;
    // console.log(userName, password);
    const user = await req.body;
    console.log(user);
    res.json(user);
  } catch (error) {
    throw Error(error);
  }
};
