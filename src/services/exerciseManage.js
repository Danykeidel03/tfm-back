const Exercise = require('../models/Exercise');
const fs = require('fs').promises;
const path = require('path');

async function newExercise(name, photo, muscle, description, calories, status) {
    try {
            const exercise = new Exercise({
            name,
            photo,
            muscle,
            description,
            calories,
            status
        });

        const res = await exercise.save();
        return res;
    } catch (e) {
        return e;
    }
}

async function getExercises(muscle, status) {
    try {
        let muscles
        if(muscle != 'all'){
            muscles = await Exercise.find({
                $and: [
                    { muscle: muscle },
                    { status : status }
                  ]
            });
        }else{
            muscles = await Exercise.find({
                $and: [
                    { status : status }
                  ]
            });
        };
        return muscles;
    } catch (e) {
        console.log('Error:', e);
    }
}

async function updateExercise(id, status) {
    try {
        const cleanId = id.startsWith('id-') ? id.replace('id-', '') : id;
        const product = await Exercise.findByIdAndUpdate(
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

module.exports = { newExercise, getExercises, updateExercise };