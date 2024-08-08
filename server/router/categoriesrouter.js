// routes.js (or wherever your routes are defined)

const express = require('express');
const router = express.Router();
const categoriesController = require('../controller/categories'); // Adjust the path to your categories controller

// Add a new category
router.post('/addcat', categoriesController.addCategory);

// Update an existing category
router.put('/update/:id', categoriesController.updateCategory);

router.get('/getcat',categoriesController.getAllCategories)

module.exports = router;
