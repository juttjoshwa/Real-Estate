import Authmodel from "../Models/AuthModel.js";
import { errorHandler } from "../Utils/errorHandler.js";
import jwt from "jsonwebtoken";

const sendingToken = (statusCode, user, res) => {
  const tokenForAuth = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT,
    {
      expiresIn: "1d",
    }
  );

  const expires = 1;
  const options = {
    expires: new Date(Date.now() + expires * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
  };
  res.status(statusCode).cookie("token", tokenForAuth, options).json({
    success: true,
    user,
    tokenForAuth,
  });
};

export const SignUp = async (req, res) => {
  try {
    const { name, email, nickname, picture } = req.body;
    if (!name || !email || !nickname || !picture) {
      return res.status(404).json({
        success: false,
        message: "All info required!",
      });
    }

    const user = await Authmodel.create({
      name,
      email,
      nickname,
      picture,
    });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Cannot make user",
      });
    }

    return sendingToken(200, user, res);
  } catch (error) {
    return errorHandler(res, error);
  }
};

export const Login = (req, res) => {
  try {
    
  } catch (error) {
    return errorHandler(res, error);
  }
};
