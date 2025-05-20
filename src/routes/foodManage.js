const express = require('express');
const router = express.Router();
const multer = require('multer');
const foodController = require('../controllers/foodController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('photo'), foodController.newFood);
router.get('/', foodController.getFood);
router.get('/admin/', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), foodController.getFood);
router.put('/admin/update/:id', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), foodController.updateStatusFood);

module.exports = router;