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
const createUserValidators = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser un texto'),

  body('mail')
    .notEmpty().withMessage('El mail es obligatorio')
    .isString().withMessage('El mail debe ser un texto'),

  body('role')
    .notEmpty().withMessage('El rol es obligatorio')
    .isString().withMessage('El rol debe ser un texto'),

  body("weight")
    .notEmpty()
    .withMessage("El peso es obligatorio")
    .isNumeric()
    .withMessage("El peso debe ser un número")
    .custom((value) => value >= 0 || "El peso no puede ser negativo"),

  body("height")
    .notEmpty()
    .withMessage("La altura es obligatoria")
    .isNumeric()
    .withMessage("La altura debe ser un número")
    .custom((value) => value >= 0 || "La altura no puede ser negativa"),

    body('activity')
    .notEmpty().withMessage('La actividad es obligatoria')
    .isString().withMessage('La actividad debe ser un texto'),

  validateResult
];

module.exports = createUserValidators;
