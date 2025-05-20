const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const nokMiddleware = require('./middlewares/nokMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Configuración CORS para toda la API
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true); // Permitir todos los orígenes, o aquí puedes filtrar por https://danykeidel03.github.io
    },
    credentials: true,
  })
);

// Middleware para servir imágenes estáticas y añadir cabeceras CORS + CORP específicas para ellas
app.use(
  '/uploads',
  (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://danykeidel03.github.io');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
  },
  express.static(path.join(__dirname, 'uploads'))
);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Parsear JSON
app.use(express.json());

// Seguridad y cookies
app.use(helmet());
app.use(cookieParser());

// Rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas peticiones desde esta ip'
});

/**
 * LLAMADA RUTAS
 */
const manageUser = require('./routes/userManage');
app.use('/user', manageUser);

const manageExercises = require('./routes/exerciseManage');
app.use('/exercise', manageExercises);

const manageFoods = require('./routes/foodManage');
app.use('/food', manageFoods);

const manageCalories = require('./routes/caloriesManage');
app.use('/calories', manageCalories);

// Protege todas las rutas con rate limiter
app.use('/', apiLimiter);

// Middleware de error y 404
app.use(errorMiddleware);
app.use(nokMiddleware);

module.exports = app;
