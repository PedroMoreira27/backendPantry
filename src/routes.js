const express = require('express');
const router = express.Router();

const pantryController = require('./controllers/pantryController');

router.get('/usuarios', pantryController.buscarTodos);

module.exports = router;