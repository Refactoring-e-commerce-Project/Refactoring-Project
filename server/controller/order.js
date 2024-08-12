const {
  Order,
  OrderProduct,
  sequelize,
  Product,
} = require("../database/index");

const addOrder = async (req, res) => {
  try {
    const { userId, productsList } = req.body;

    console.log("hhh", userId);
    console.log(productsList);

    if (!userId || !Array.isArray(productsList) || productsList.length === 0) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const transaction = await sequelize.transaction();

    try {
      const order = await Order.create(
        {
          userId,
          totalPrice: 0,
        },
        { transaction }
      );

      let calculatedTotalPrice = 0;

      for (const product of productsList) {
        const { productId, quantity, totalPrice } = product;
        let productPrice = totalPrice;
        console.log(productPrice);
        if (!productId || !quantity || !productPrice) {
          throw new Error("Invalid product data");
        }

        const orderProduct = await OrderProduct.create(
          {
            orderId: order.id,
            productId,
            quantity,
            price: productPrice,
            totalPrice: productPrice * quantity,
          },
          { transaction }
        );

        calculatedTotalPrice += orderProduct.totalPrice;
      }

      await order.update({ totalPrice: calculatedTotalPrice }, { transaction });

      await transaction.commit();

      res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
      await transaction.rollback();
      console.error("Transaction failed:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  } catch (error) {
    console.error("Error in addOrder:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllOrder = async (req, res) => {
  const userId = req.params.userId;
  try {
    const Orders = await Order.findAll({
      where: { userId: userId },
      include: { model: OrderProduct, include: [Product] },
    });

    res.json(Orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("error fetching the products");
  }
};

module.exports = {
  addOrder,
  getAllOrder,
};
