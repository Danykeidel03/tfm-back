//AQUI VAN EL SCHEMA DE USUSARIO
const mongose = require('mongoose');

const exerciseSchema = new mongose.Schema({
    name: { type: String, required: true, unique: true },
    photoName: { type: String, required: false },
    muscle: { type: String, required: true,},
    description: { type: String, required: true },
    calories: { type: Number, required: true },
    status: { type: String, required: true },
});

const ExerciseRegister = mongose.model('ExerciseRegister', exerciseSchema);

module.exports = ExerciseRegister;