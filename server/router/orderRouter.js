const express = require("express");
const orderRouter = express.Router();

const { addOrder, getAllOrder } = require("../controller/order");

orderRouter.post("/add", addOrder);
orderRouter.get("/getAll/:userId", getAllOrder);

module.exports = orderRouter;
