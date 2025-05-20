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
    body("calories")
        .notEmpty()
        .withMessage("El consumo calorico es obligatorio")
        .isNumeric()
        .withMessage("El consumo calorico debe ser un número"),

    validateResult
];

module.exports = newFoodValidator;
