const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/caloriesController');
const multer = require('multer');
const upload = multer();

router.post('/', upload.none(), caloriesController.newRutineCalories);
//router.get('/', caloriesController.getRutineCalories)

module.exports = router;