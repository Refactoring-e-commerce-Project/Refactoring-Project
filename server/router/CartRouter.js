const express = require('express');
const cartRouter = express.Router();
const{ getAllcart, addToCart, updateCart, deleteCart, getOneCart } =require("../controller/cart")

cartRouter.get("/getAll",getAllcart)
cartRouter.post("/add",addToCart)
cartRouter.put("/update/:id",updateCart)
cartRouter.delete("/delete/:id",deleteCart)
cartRouter.get("/getcartbyuser/:id",getOneCart)

module.exports=cartRouter


