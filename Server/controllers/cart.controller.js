const { products, cart } = require("../models");

const getAllCart = async (req, res) => {
  try {
    const carts = await cart.findAll();
    res.status(200).json({
      status: "Success",
      message: "Success to get all carts",
      isSuccess: true,
      data: carts,
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

const getCartByUser = async (req, res) => {
  try {
    const userLogin = req.user.id;

    const carts = await cart.findAll({
      where: {
        userId: userLogin,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Success to get all carts",
      isSuccess: true,
      data: carts,
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

const createCart = async (req, res) => {
  try {
    const { amount, total, productId, userId } = req.body;

    if (!amount || !total || !productId) {
      return res.status(400).json({
        status: "Failed",
        message: "All fields are required",
        isSuccess: false,
        data: null,
      });
    }

    // userId = req.user.id;

    const carts = await cart.create({
      amount,
      total,
      userId,
      productId,
    });

    res.status(201).json({
      status: "Success",
      message: "Cart created successfully",
      isSuccess: true,
      data: carts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Failed",
      message: error.message,
      isSuccess: false,
      data: null,
    });
  }
};

const updateCart = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        status: "Failed",
        message: "All fields are required",
        isSuccess: false,
        data: null,
      });
    }

    const productInCart = await cart.findByPk(req.params.id, {
      include: {
        model: products,
        as: "product",
        attributes: ["price"],
      },
    });

    if (!productInCart) {
      return res.status(404).json({
        status: "Failed",
        message: "Cart not found",
        isSuccess: false,
        data: null,
      });
    }

    const total = amount * productInCart.product.price;

    await cart.update({ amount, total }, { where: { id: req.params.id } });

    const updateCart = await cart.findByPk(req.params.id, {
      include: {
        model: products,
        as: "product",
        attributes: ["price"],
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Cart updated successfully",
      isSuccess: true,
      data: updateCart,
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

const deleteCart = async (req, res) => {
  try {
    const deleted = await cart.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({
        status: "Success",
        message: "Success to delete cart",
        isSuccess: true,
        data: null,
      });
    } else {
      return res.status(404).json({
        status: "Failed",
        message: "Cart not found",
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
  getAllCart,
  getCartByUser,
  createCart,
  updateCart,
  deleteCart,
};
