const express = require('express');
const router = express.Router();
const wishlistcontroller = require('../controller/wishlist')



router.post('/addwhishlist', wishlistcontroller.addwhitelist)
router.get('/getwhishlist/:userId', wishlistcontroller.getwishlist)
router.delete('/deletewishlist', wishlistcontroller.deletewishlist)




module.exports=router;