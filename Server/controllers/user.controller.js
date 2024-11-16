const { users } = require("../models"); // import the users model
const bcrypt = require("bcrypt");
const imagekit = require("../lib/imagekit");

// Create a new user
const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            address,
            phone,
            role = "user",
        } = req.body;
        const file = req.file;
        console.log(file);

        if (!name || !email || !password) {
            res.status(400);
            throw new Error("Please provide name, email, and password");
        }

        let photoProfile = null;
        if (file) {
            const uploadedImage = await imagekit.upload({
                file: file.buffer,
                fileName: file.originalname,
            });
            photoProfile = uploadedImage.url;
        }

        const newUser = await users.create({
            name,
            email,
            password,
            address,
            phone,
            role,
            photoProfile,
        });

        res.status(201).json({
            status: "Success",
            message: "User created successfully",
            isSuccess: true,
            data: newUser,
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

// Get all users
const getAllUsers = async (req, res) => {
    try {
        // Get page and limit from query, set default values if not provided
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 users per page
        const offset = (page - 1) * limit;

        // Get total count of users
        const totalUsers = await users.count();
        const totalPages = Math.ceil(totalUsers / limit);

        // Fetch users with pagination
        const allUsers = await users.findAll({
            limit: limit,
            offset: offset,
        });

        res.status(200).json({
            status: "Success",
            message: "Success to get users",
            isSuccess: true,
            data: allUsers,
            pagination: {
                totalUsers,
                totalPages,
                currentPage: page,
                usersPerPage: limit,
            },
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
            return res.status(200).json({
                status: "Success",
                message: "Success to delete user",
                isSuccess: true,
                data: null,
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
        return res.status(500).json({
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
