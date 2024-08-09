const express = require("express");
const product = require("../controller/product");
const router = express.Router();

router.post("/add", product.addProduct);
router.get("/getAll", product.getAllProducts);
router.get("/:id", product.getOneProduct);
router.get("/user/:userId", product.getProductsByUserId);
router.put("/:id", product.updateProduct);
router.delete("/:id", product.deleteProduct);

module.exports = router;
