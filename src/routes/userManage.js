const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateEmailData = require('../middlewares/validateEmailData');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

router.post('/', upload.single('photo'), validateEmailData, userController.resgiterUser);
router.post('/login', upload.none(), userController.loginUser);
router.post('/admin', upload.none(), userController.loginUser);
router.get('/', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), upload.none(), userController.getUsers);
router.put('/:id', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), upload.none(), userController.updateUser);
router.delete('/:id', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), upload.none(), userController.deleteUser);
router.get('/isAdmin/:name', authMiddleware.verificarToken, authMiddleware.verificarRol(['admin']), upload.none(), userController.isAdmin);
router.get('/logOut', authMiddleware.verificarToken, upload.none(), userController.logOut);


module.exports = router;