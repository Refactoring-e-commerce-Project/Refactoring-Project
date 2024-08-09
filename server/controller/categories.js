// controllers/categoriesController.js

const { Category } = require('../database/index'); // Adjust the path to your database setup

// Add a new category
const addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;

        // Basic validation
        if (!categoryName) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        // Check if the category already exists
        const existingCategory = await Category.findOne({ where: { categoryName } });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        // Create the new category
        const newCategory = await Category.create({ categoryName });

        res.status(201).json({ message: 'Category created successfully', category: newCategory });
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an existing category
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;

        // Basic validation
        if (!id || !categoryName) {
            return res.status(400).json({ message: 'Category ID and name are required' });
        }

        // Find the category by ID
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Update the category name
        category.categoryName = categoryName;
        await category.save();

        res.status(200).json({ message: 'Category updated successfully', category });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getAllCategories = async (req, res) => {
    try {
        // Fetch all categories
        const categories = await Category.findAll();

        res.status(200).json({ categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    addCategory,
    updateCategory,
    getAllCategories
};
