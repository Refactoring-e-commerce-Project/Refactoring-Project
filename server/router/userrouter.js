const express = require('express');
const  userController = require('../controller/usercontroller');

const router = express.Router();

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/type/:type', userController.getByType);
router.get('/getclients', userController.getClients);
router.get('/getsellers', userController.getSellers);
router.delete('/delete/:id', userController.deleteUser);
router.put('/update/:id', userController.updateUser);
router.get('/getall', userController.getall);




module.exports = router;
