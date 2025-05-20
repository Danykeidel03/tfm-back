const { body, validationResult } = require('express-validator');

// Middleware para validar resultados
const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Validadores para crear usuario
const newFoodValidator = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser un texto'),

    body("calories")
        .notEmpty()
        .withMessage("El consumo calorico es obligatorio")
        .isNumeric()
        .withMessage("El consumo calorico debe ser un número")
        .custom((value) => value >= 0 || "El consumo calorico no puede ser negativo"),

    validateResult
];

module.exports = newFoodValidator;
