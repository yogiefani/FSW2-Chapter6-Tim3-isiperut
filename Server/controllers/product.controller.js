const { products } = require("../models"); // import the products model
const imagekit = require("../lib/imagekit");
const { Op } = require("sequelize");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, desc, price, stock, category } = req.body;

    let image = null
    if(req.file){
      const file = req.file;

      const split = file.originalname.split(".");
      const ext = split[split.length - 1];
      const filename = split[0];
      const fileBuffer = file.buffer;
      const fileName = `Product-${filename}-${Date.now()}.${ext}`;

      const uploadedFile = await imagekit.upload({
          file: fileBuffer,
          fileName: fileName,
      });

      image = uploadedFile.url;
    }

    if (!name || !desc || !price || !stock || !category) {
      res.status(400);
      throw new Error(
        "Please provide name, description, price, stock, and category"
      );
    }

    // Create a new product
    const newProduct = await products.create({
      name,
      desc,
      price,
      stock,
      category,
      image,
    });

    res.status(201).json({
      status: "Success",
      message: "Product created successfully",
      isSuccess: true,
      data: newProduct,
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

// Get all products
const getAllProducts = async (req, res) => {
  try {
    // Get page and limit from query, set default values if not provided
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 products per page
    const offset = (page - 1) * limit;

    // Get total count of products
    const totalProducts = await products.count();
    const totalPages = Math.ceil(totalProducts / limit);

    // Fetch products with pagination
    const allProducts = await products.findAll({
      limit: limit,
      offset: offset,
      paranoid: false, // Include soft-deleted products
      order: [['deletedAt', 'DESC']],
    });

    return res.status(200).json({
      status: "Success",
      message: "Success to get products",
      isSuccess: true,
      data: allProducts,
      pagination: {
        totalProducts,
        totalPages,
        currentPage: page,
        productsPerPage: limit,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to get products",
      isSuccess: false,
      data: null,
    });
  }
};

const getAllProductsNoDeleted = async (req, res) => {
  try {
    const { name, price, stock, category } = req.query;

    const condition = {}

    if (name) condition.name = { [Op.iLike]: `%${name}%` }
    if (price) condition.price = { [Op.lte]: price }
    if (stock) condition.stock = { [Op.gte]: stock }
    if (category) condition.category = category

    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 products per page
    const offset = (page - 1) * limit;

    const totalProducts = await products.count();
    const totalPages = Math.ceil(totalProducts / limit);

    const allProducts = await products.findAll({
      limit: limit,
      offset: offset,
      order: [['id', 'ASC']],
    });

    return res.status(200).json({
      status: "Success",
      message: "Success to get products",
      isSuccess: true,
      data: allProducts,
      pagination: {
        totalProducts,
        totalPages,
        currentPage: page,
        productsPerPage: limit,
      },
    });

  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Failed to get products",
      isSuccess: false,
      data: null,
    });
  }
}

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await products.findByPk(req.params.id, { paranoid: false });
    if (product) {
      res.status(200).json({
        status: "Success",
        message: "Success to get product",
        isSuccess: true,
        data: product,
      });
    } else {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
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

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { name, desc, price, stock, category, image } = req.body;
    const updateData = { name, desc, price, stock, category, image };

    // Update product based on the provided ID
    const [updated] = await products.update(updateData, {
      where: { id: req.params.id },
    });

    if (updated) {
      // Fetch updated product data
      const updatedProduct = await products.findByPk(req.params.id);
      res.status(200).json({
        status: "Success",
        message: "Product updated successfully",
        isSuccess: true,
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        status: "Failed",
        message: "Product not found",
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

// Soft delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const deleted = await products.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({
        status: "Success",
        message: "Product deleted successfully",
        isSuccess: true,
        data: null,
      });
    } else {
      return res.status(404).json({
        status: "Failed",
        message: "Product not found",
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
  createProduct,
  getAllProducts,
  getAllProductsNoDeleted,
  getProductById,
  updateProduct,
  deleteProduct,
};
