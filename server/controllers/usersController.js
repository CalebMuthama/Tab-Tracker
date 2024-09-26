import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Generate a JWT token
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//  @Desc   Register User
//  Route   POST api/users
//  access  public
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        id: user.id,
        email: user.email,
        password: user.password,
        token: generateToken(user),
      });
    } else {
      res.status(400).json({
        message: "All fields must be filled",
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      message: "This user already exists.",
    });
  }
};

//  @desc   Authenticate User
//  @route  POST /api/users
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check for email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id: user.id,
        name: user.email,
        token: generateToken(user),
      });
    } else {
      return res.status(403).json({
        message: "Inavlid login credentials",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "An error has occured when trying to login.",
    });
  }
};
export { registerUser, loginUser };
