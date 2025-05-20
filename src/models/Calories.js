//AQUI VAN EL SCHEMA DE USUSARIO
const mongose = require('mongoose');

const caloriesSchema = new mongose.Schema({
    mailUser: { type: String, required: true },
    calories: { type: Number, required: true },
    fechaCreacion: { type: Date, required: true, default: Date.now }
});

const CaloriesRegister = mongose.model('CaloriesRegister', caloriesSchema);

module.exports = CaloriesRegister;