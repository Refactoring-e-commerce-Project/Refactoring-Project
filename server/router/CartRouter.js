const express = require('express');
const cartRouter = express.Router();
<<<<<<< HEAD
const{ getAllcart, addToCart, updateCart, deleteCart, getOneCart } =require("../controller/cart")
=======
const{ getAllcart, addToCart, updateCart, deleteCart, getOneCart, getOneCartByProdId } =require("../controller/cart")
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2

cartRouter.get("/getAll",getAllcart)
cartRouter.post("/add",addToCart)
cartRouter.put("/update/:id",updateCart)
cartRouter.delete("/delete/:id",deleteCart)
cartRouter.get("/getcartbyuser/:id",getOneCart)
<<<<<<< HEAD
=======
cartRouter.get("/getcartbyprod/:id",getOneCartByProdId)

>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2

module.exports=cartRouter


