const express = require("express")
const router = express.Router();
const {createProduct, getAllProducts, deleteProduct, getProductById} = require("../controllers/productControllers")

router.post("/",createProduct)
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.get("/:productId", getProductById);

module.exports=router;
