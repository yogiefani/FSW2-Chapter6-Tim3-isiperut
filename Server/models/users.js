"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            users.hasMany(models.cart, {
                foreignKey: "userId",
            });
        }
    }

    users.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Name is required",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    name: "unique_email_constraint",
                    msg: "Email already used",
                },
                validate: {
                    isEmail: {
                        msg: "Must be a valid email address",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [6, 128],
                        msg: "Password should be between 6 and 128 characters",
                    },
                },
            },
            address: DataTypes.STRING,
            phone: {
                type: DataTypes.STRING,
                validate: {
                    isNumeric: {
                        msg: "Phone number should contain only numbers",
                    },
                    len: {
                        args: [10, 15],
                        msg: "Phone number should be between 10 and 15 digits",
                    },
                },
            },
            role: {
                type: DataTypes.ENUM("admin", "user"),
                allowNull: false,
                validate: {
                    isIn: {
                        args: [["admin", "user"]],
                        msg: "Role must be either admin or user",
                    },
                },
            },
            photoProfile: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "users",
            hooks: {
                // Hash password before saving the user
                beforeSave: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSalt(10);
                        user.password = await bcrypt.hash(user.password, salt);
                    }
                },
            },
        }
    );

    return users;
};
