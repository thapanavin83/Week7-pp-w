const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateproduct,
} = require("../controllers/productControllers");
const requireAuth = require("../middleware/requireAuth");

router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.use(requireAuth);
router.post("/", createProduct);
router.put("/:productId", updateproduct);
router.delete("/:productId", deleteProduct);

module.exports = router;