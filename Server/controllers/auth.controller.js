const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "Failed",
        message: "Email and password is required",
        isSuccess: false,
        data: null,
      });
    }

    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        status: "Failed",
        message: "User not found",
        isSuccess: false,
        data: null,
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        status: "Failed",
        message: "Password is incorrect",
        isSuccess: false,
        data: null,
      });
    } else {
      const token = jwt.sign(
        {
          userId: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: `${process.env.JWT_EXPIRES_IN}` }
      );
      res.status(200).json({
        status: "Success",
        message: "Login success",
        isSuccess: true,
        data: {
          token,
          user,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
      isSuccess: false,
      data: null,
    });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name || !email || !password || !address || !phone) {
      return res.status(400).json({
        status: "Failed",
        message: "All fields are required",
        isSuccess: false,
        data: null,
      });
    }

    const user = await users.create({
      name,
      email,
      password,
      address,
      phone,
      role: "user",
    });

    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      isSuccess: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
      isSuccess: false,
      data: null,
    });
  }
};

const currentLogin = async (req, res) => {
  try {
    const user = await users.findByPk(req.user.id);
    res.status(200).json({
      status: "Success",
      message: "Success to get user",
      isSuccess: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error.message,
      isSuccess: false,
      data: null,
    });
  }
};

module.exports = {
  login,
  register,
  currentLogin,
};
