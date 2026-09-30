
const mongoose = require("mongoose");
const Product = require("../models/productmodel");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
   
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async(req, res) => {
  try{
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message:"Product deleted successfully"});


  }catch (error){
    res.status(500).json({message: error.message});
  }
}; 

const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({
      message: "Invalid product ID",
    });
  }
};

const updateproduct = async (req, res) => {
    const {productId} = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(404).json({message: "Invalid product ID"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {new: true});
        if (!updatedProduct) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
   getProductById,
   updateproduct,
};