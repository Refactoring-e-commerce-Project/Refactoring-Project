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
const uploadImage = require("./cloudinayUpload");

const PORT = 3000;
const app = express();


app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }))
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/products", productsRoutes);

app.use("/wishlist", wishlistRoutes);
app.use("/categories", categoriesRoutes);
app.use("/users", userRoutes);
app.use("/carts", cartRouter);

////////////////////////////
app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send([url]))
    .catch((err) => res.status(500).send(err));
});

app.post("/uploadMultipleImages", (req, res) => {
  uploadImage
    .uploadMultipleImages(req.body.images)
    .then((urls) => res.send([urls]))
    .catch((err) => res.status(500).send(err));
});
////////////////////////////////
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
