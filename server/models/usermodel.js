const sequelize = require('../database/index'); // Adjust the path to your Sequelize instance
const {  DataTypes } = require('sequelize');

console.log(sequelize); // Add this line to debug

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['client', 'seller', 'admin']] // Custom validation to ensure valid values
        }
    }
}, {
    tableName: 'users',
    timestamps: true
});

// Export the User model
module.exports = User;
