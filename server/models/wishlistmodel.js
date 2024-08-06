const sequelize = require('../database/index'); // Adjust the path to your Sequelize instance
const {  DataTypes } = require('sequelize');


// Define the Wishlist model
const Wishlist = sequelize.define('Wishlist', {
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
    }
}, {
    tableName: 'wishlists',
    timestamps: true
});



module.exports = Wishlist