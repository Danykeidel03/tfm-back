const express = require('express');
const router = express.Router();
const multer = require('multer');
const exerciseController = require('../controllers/exerciseController');
const authMiddleware = require('../middlewares/authMiddleware');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

router.post('/', upload.single('photo'), exerciseController.newExercise);
router.get('/:muscle', exerciseController.getExercise);
router.get('/admin/:muscle', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), exerciseController.getExercise);
router.put('/admin/update/:id', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), exerciseController.updateStatusExercise);

module.exports = router;