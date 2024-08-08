const { Wishlist } = require('../database/index')


// add wishlist to the cart
const addwhitelist = async (req, res) => {
    try {
        const { userId,productId } = req.body;

        // Basic validation
        if (!userId || !productId) {
            return res.status(400).json({ message: 'User and Product are required' });
        }


        // Create the new wishlist
        const newWishlist = await Wishlist.create({ userId,productId });

        res.status(201).json({ message: 'created successfully', userId: userId , productId: productId});
    } catch (error) {
        console.error('adding error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// view all fav items 
const getwishlist = async (req, res) => {
    try {
        
        const favlist = await Wishlist.findAll();

        if (favlist.length === 0) {
            return res.status(404).json({ message: 'No wishlist found' });
        }

        res.status(200).json({ favlist });
    } catch (error) {
        console.error('Error retrieving wishlist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// delete wishlist
const deletewishlist = async (req, res) => {
    try {
        const { id } = req.params;

        // Basic validation
        if (!id) {
            return res.status(400).json({ message: 'wishist is required' });
        }

        // Find the user by ID
        const wishlist = await Wishlist.findByPk(id);
        if (!wishlist) {
            return res.status(404).json({ message: 'wishlist not found' });
        }

        // Delete the user
        await wishlist.destroy();

        res.status(200).json({ message: 'wishlist deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};







module.exports={
    addwhitelist,
    getwishlist,
    deletewishlist
}