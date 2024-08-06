const sequelize = require('../database/index'); // Adjust the path to your Sequelize instance
const {  DataTypes } = require('sequelize');


// Define the Cart model
const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Name of the User model or table
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products', // Name of the Product model or table
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1
        }
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
}, {
    // Model options
    tableName: 'carts',
    timestamps: true
});


 module.exports = Cart