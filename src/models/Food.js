//AQUI VAN EL SCHEMA DE USUSARIO
const mongose = require('mongoose');

const foodSchema = new mongose.Schema({
    name: { type: String, required: true, unique: true },
    photoName: { type: String, required: false },
    calories: { type: Number, required: true },
    status: { type: String, required: true },
});

const FoodRegister = mongose.model('FoodRegister', foodSchema);

module.exports = FoodRegister;