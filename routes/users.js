var express = require('express');
var router = express.Router();

const usersController = require('../controllers/userController');

router.get('/', usersController.usersList);
router.get('/id/:id', usersController.userById);
router.post('/register', usersController.newUser);
router.delete('/deletebyid/:id', usersController.deleteUserByID);
router.delete('/deletebyemail/:email', usersController.deleteUserByEmail);
router.put('/edit/:id', usersController.editUser);


module.exports = router;