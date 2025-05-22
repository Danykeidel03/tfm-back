const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/caloriesController');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = multer();

router.post('/', authMiddleware.verificarToken, upload.none(), caloriesController.newRutineCalories);
router.get('/', authMiddleware.verificarToken, caloriesController.getRutineCalories)

module.exports = router;