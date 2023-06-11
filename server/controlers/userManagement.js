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
    const { userName, password } = req.body;
    // Check for user username
    const user = await User.findOne({ userName });

    if (!user) return next(createError(404, "User not found!"));


    if (user) {
      console.log(`User ${userName} is logged in`)
      res
        .json({
          _id: user.id,
        });
    } else {
      return next(createError(400, "Invalid credentials!"));
    }
  } catch (error) {
    throw Error(error);
  }
};
