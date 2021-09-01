const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const GoogleUser = require("../models/googleUser.model");

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: "Invalid User" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exists." });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ email, password: hashedPassword, name });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

exports.googlesignup = async (req, res) => {
  console.log("This is email " + req.email);
  try {
    const existingUser = await GoogleUser.findOne({ email: req.email });
    if (existingUser)
      return res.status(200).json({ message: "User already exists." });
    const result = await GoogleUser.create({
      name: req.name,
      email: req.email,
      userid: req.userId,
    });
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
