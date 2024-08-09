const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/index'); // Adjust the path to your Sequelize instance

// Define the Category model
const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensures that category names are unique
    }
}, {
    // Model options
    tableName: 'categories',
    timestamps: true // Sequelize will handle createdAt and updatedAt fields automatically
});

module.exports = Category