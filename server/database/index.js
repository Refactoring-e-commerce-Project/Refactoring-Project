// models/index.js
const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// Create a Sequelize instance

const sequelize = new Sequelize("commerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// Define the User model
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["client", "seller", "admin"]],
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

// Define the Product model
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON, // Store an array of image URLs or paths
      allowNull: true,
      validate: {
        isArrayOfImages(value) {
          if (Array.isArray(value)) {
            if (value.length > 4) {
              throw new Error("You can only upload up to 4 images.");
            }
            value.forEach((url) => {
              if (typeof url !== "string") {
                throw new Error("Each image URL must be a string.");
              }
              // Additional validation for URL format could be added here
            });
          } else {
            throw new Error("Images must be an array.");
          }
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,

      allowNull: true,
      defaultValue: 1,
      references: {
        model: "categories",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

// Define the Cart model
const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    tableName: "carts",
    timestamps: true,
  }
);

// Define the Wishlist model
const Wishlist = sequelize.define(
  "Wishlist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
  },
  {
    tableName: "wishlists",
    timestamps: true,
  }
);

// Define the Category model
const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "categories",
    timestamps: true,
  }
);

// Set up associations
User.hasMany(Product, { foreignKey: "userId" });

User.hasMany(Wishlist, { foreignKey: "userId" });
User.hasMany(Cart, { foreignKey: "userId" });

Product.belongsTo(User, { foreignKey: "userId" });
Product.hasMany(Cart, { foreignKey: "productId" });
Product.hasMany(Wishlist, { foreignKey: "productId" });

Cart.belongsTo(User, { foreignKey: "userId" });
Product.belongsTo(Category, { foreignKey: "categoryId" }); // add by shady
Cart.belongsTo(Product, { foreignKey: "productId" });

Wishlist.belongsTo(User, { foreignKey: "userId" });
Wishlist.belongsTo(Product, { foreignKey: "productId" });

// Authenticate and synchronize the database
sequelize
  .authenticate()
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Database connection error:", err));

sequelize
  .sync()
  .then(() => {
    console.log("Database and tables created");
    createAdminUser(); // Call function to create the admin user
  })
  .catch((err) => console.error("Error creating database tables:", err));

// Function to create the admin user
const createAdminUser = async () => {
  try {
    // Define admin user details
    const adminUser = {
      name: "admin",
      mail: "admin@gmail.com",
      password: "admin", // Plain text password
      type: "admin",
    };

    // Check if the admin user already exists
    const existingUser = await User.findOne({
      where: { mail: adminUser.mail },
    });
    if (existingUser) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminUser.password, 10);

    // Create the admin user
    await User.create({
      ...adminUser,
      password: hashedPassword,
    });

    console.log("Admin user created successfully.");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

module.exports = {
  sequelize,
  User,
  Product,
  Cart,
  Wishlist,
  Category,
};

// const { Sequelize } = require('sequelize');

// // Create a Sequelize instance
// const sequelize = new Sequelize('commerce', 'fourat', 'Liverpool1892', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// const User = require('../models/usermodel')
// const Product = require('../models/productmodel')
// const Cart = require('../models/cartmodel')
// const Wishlist = require('../models/wishlistmodel')
// const categories = require('../models/categoriesmodel')

// User.hasMany(Product, { foreignKey: 'userId' });
// User.hasMany(Wishlist, { foreignKey: 'userId' });
// User.hasMany(Cart, { foreignKey: 'userId' });

// Product.belongsTo(User, { foreignKey: 'userId' });
// Product.hasMany(Cart, { foreignKey: 'productId' });
// Product.hasMany(Wishlist, { foreignKey: 'productId' });

// Cart.belongsTo(User, { foreignKey: 'userId' });
// Cart.belongsTo(Product, { foreignKey: 'productId' });

// Wishlist.belongsTo(User, { foreignKey: 'userId' });
// Wishlist.belongsTo(Product, { foreignKey: 'productId' });

// sequelize.authenticate()
// .then(()=>{console.log('connected successfully')})
// .catch((err)=>{console.log(err);})

// sequelize.sync().then(()=>{console.log('database and tables created')})
// .catch((err)=>{console.log(err)})

// module.exports = sequelize;
