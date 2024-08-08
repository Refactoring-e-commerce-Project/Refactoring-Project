// const express = require("express");
// const cors = require("cors");

// const { sequelize } = require("./database/index");
// const userRoutes = require("./router/userrouter"); 
// const categoriesRoutes = require("./router/categoriesrouter");
// const productsRoutes = require("./router/productRouter");
// const cartRouter= require("./router/CartRouter")
// const wishlistRoutes = require('./router/wishlistrouter')

// const PORT = 3000;
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/products", productsRoutes);

// app.use('/wishlist', wishlistRoutes)

// app.use('/users', userRoutes);
// app.use('/carts',cartRouter)

// app.get("/", (req, res) => {
//   res.send("Hello from the server!");
// });

// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");

const { sequelize } = require("./database/index");
const userRoutes = require("./router/userrouter"); 
const categoriesRoutes = require("./router/categoriesrouter");
const productsRoutes = require("./router/productRouter");
const cartRouter = require("./router/CartRouter");
const wishlistRoutes = require("./router/wishlistrouter");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productsRoutes);

app.use("/wishlist", wishlistRoutes);
app.use("/categories", categoriesRoutes);
app.use("/users", userRoutes);
app.use("/carts", cartRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
