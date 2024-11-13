const { users } = require("../models"); // import the users model
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, address, phone, role, photoProfile } =
      req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please provide name, email, and password");
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      role,
      photoProfile,
    });
    res.status(201).json({
      status: "Success",
      message: "Success to create user",
      isSuccess: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Failed to create user",
      isSuccess: false,
      data: null,
    });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.findAll();
    res.status(200).json({
      status: "Success",
      message: "Success to get users",
      isSuccess: true,
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Failed to get users",
      isSuccess: false,
      data: null,
    });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) {
      res.status(200).json({
        status: "Success",
        message: "Success to get user",
        isSuccess: true,
        data: user,
      });
    } else {
      return res.status(404).json({
        status: "Failed",
        message: "User not found",
        isSuccess: false,
        data: null,
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

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const { name, email, password, address, phone, role, photoProfile } =
      req.body;
    const updateData = { name, email, address, phone, role, photoProfile };

    // Hash the password if it is provided in the update request
    if (password) {
      updateData.password = await bcrypt.hash(password, saltRounds);
    }

    const [updated] = await users.update(updateData, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedUser = await users.findByPk(req.params.id);
      res.status(200).json({
        status: "Success",
        message: "User updated successfully",
        isSuccess: true,
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        status: "Failed",
        message: "User not found",
        isSuccess: false,
        data: null,
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

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const deleted = await users.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({
        status: "Success",
        message: "Success to delete user",
        isSuccess: true,
        data: null,
      });
      return res.status(404).json({
        status: "Failed",
        message: "User not found",
        isSuccess: false,
        data: null,
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

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
