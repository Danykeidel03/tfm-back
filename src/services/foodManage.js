const Food = require('../models/Food');
const fs = require('fs').promises;
const path = require('path');
const uploadDir = path.join(__dirname, '../../uploads/food');

async function newFood(name, photoName, calories, status) {
    try {
        const food = new Food({
            name,
            photoName,
            calories,
            status
        });

        const res = await food.save();
        return res;
    } catch (e) {
        return e;
    }
}

async function getFoods(status) {
    try {
        const users = await Food.find({ status : status });
        return users;
    } catch (e) {
        console.log('Error:', e);
    }
}

async function updateFood(id, status) {
    try {
        const cleanId = id.startsWith('id-') ? id.replace('id-', '') : id;
        const product = await Food.findByIdAndUpdate(
            cleanId,
            status,
            { 
                new: true,
                runValidators: true 
            }
        );
        if (!product) {
            throw new Error('ejercicio no encontrado');
        }
        return product;
    } catch (e) {
        console.error('Error al actualizar usuario:', e);
        throw e;
    }
}

module.exports = { newFood, getFoods, updateFood };