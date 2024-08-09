const { Product, Category } = require("../database/index");

const getAllProducts = async (req, res) => {
  try {
    // const products = await Product.findAll({ include: Category });
    const products = await Product.findAll({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("error fetching the products");
  }
};

const addProduct = async (req, res) => {
  const newProduct = req.body;
  try {
    const product = await Product.create(newProduct);
    res.status(201).send({
      message: "product created successfully",
      productId: product.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("error adding a product");
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  try {
    const oneProduct = await Product.findByPk(id);
    if (!oneProduct) {
      res.status(404).send("product not found");
    } else {
      res.send(oneProduct);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(" error getting one product");
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    productname,
    images,
    availability,
    description,
    favoris,
    price,
    quantity,
    categoryId,
  } = req.body;

  try {
    const [updated] = await Product.update(
      {
        productname,
        images,
        availability,
        description,
        favoris,
        price,
        quantity,
        categoryId,
      },
      { where: { id } }
    );
    res.status(200).send(" product updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("error updating the prodcut");
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = Product.destroy({ where: { id: id } });
    res.status(200).send(" product deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("error deleting the product");
  }
};

const getProductsByUserId = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  try {
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const products = await Product.findAll({
      where: { userId },
      include: { model: Category },
    });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this user" });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products by user ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getProductsByUserId,
};
