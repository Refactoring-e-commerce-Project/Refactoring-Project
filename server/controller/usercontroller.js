const { User } = require('../database/index'); // Adjust the path to your database setup
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// JWT Secret Key (make sure to keep this secure and not hard-code it in production)
const JWT_SECRET = 'abcdefg123456'; // Change this to a more secure key

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, mail, password, type } = req.body;

        // Basic validation
        if (!name || !mail || !password || !type) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Retrieve the admin user
        const adminUser = await User.findOne({ where: { type: 'admin' } });

        if (adminUser) {
            // Check if the provided name or email matches the admin's credentials
            if (name === adminUser.name || mail === adminUser.mail) {
                return res.status(400).json({ message: 'Name or email cannot be the same as the admin\'s' });
            }
        } else {
            console.error('Admin user not found');
            return res.status(500).json({ message: 'Internal server error' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { mail } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await User.create({
            name,
            mail,
            password: hashedPassword,
            type
        });
        
        const token = jwt.sign({ id: newUser.id, type: newUser.type }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: 'User created successfully',
            token,  // Include token in the response
            user: {
                id: newUser.id,
                name: newUser.name,
                mail: newUser.mail,
                type: newUser.type
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// User login
const loginUser = async (req, res) => {
    try {
        const { mail, password } = req.body;

        // Basic validation
        if (!mail || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ where: { mail } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, type: user.type }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                mail: user.mail,
                type: user.type
            }
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getall = async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users); // Send users as JSON response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' }); // Send error response
  }
};





// Get users by type
const getByType = async (req, res) => {
    try {
        const { type } = req.params;

        // Basic validation
        if (!type) {
            return res.status(400).json({ message: 'Type is required' });
        }

        // Find users by type
        const users = await User.findAll({ where: { type } });

        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found for this type' });
        }

        res.status(200).json({ users });
    } catch (error) {
        console.error('Error retrieving users by type:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
//get all clients
const getClients = async (req, res) => {
    try {
        // Fetch all users with type 'client'
        const clients = await User.findAll({ where: { type: 'client' } });

        if (clients.length === 0) {
            return res.status(404).json({ message: 'No clients found' });
        }

        res.status(200).json({ clients });
    } catch (error) {
        console.error('Error retrieving clients:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//get all sellers
const getSellers = async (req, res) => {
    try {
        // Fetch all users with type 'seller'
        const sellers = await User.findAll({ where: { type: 'seller' } });

        if (sellers.length === 0) {
            return res.status(404).json({ message: 'No sellers found' });
        }

        res.status(200).json({ sellers });
    } catch (error) {
        console.error('Error retrieving sellers:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Basic validation
        if (!id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Find the user by ID
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the user
        await user.destroy();

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, mail, password, type } = req.body;

        // Basic validation
        if (!id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Find the user by ID
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the new email is already in use
        if (mail && mail !== user.mail) {
            const existingUser = await User.findOne({ where: { mail } });
            if (existingUser) {
                return res.status(400).json({ message: 'Email is already in use' });
            }
        }

        // Update user fields
        if (name) user.name = name;
        if (mail) user.mail = mail;
        if (password) user.password = await bcrypt.hash(password, 10);
        if (type) user.type = type;

        // Save updated user
        await user.save();

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createUser,
    loginUser,
    getByType,
    getClients,
    getSellers,
    deleteUser,
    updateUser,
    getall
};