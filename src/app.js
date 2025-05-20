const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nokMiddleware = require('./middlewares/nokMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

//Parsear de forma automatica en JSON
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cookieParser());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas peticiones desde esta ip'
});

/**
 * LLAMADA RUTAS
 */

const manageUser = require('./routes/userManage')
app.use('/user', manageUser)

const manageExercises = require('./routes/exerciseManage')
app.use('/exercise', manageExercises)

const manageFoods = require('./routes/foodManage')
app.use('/food', manageFoods)

const manageCalories = require('./routes/caloriesManage')
app.use('/calories', manageCalories)

//toda mi api queda protegida de muchas peticiones recurrentes y excesivas
app.use('/', apiLimiter);
app.use(errorMiddleware)
app.use(nokMiddleware)
module.exports = app;