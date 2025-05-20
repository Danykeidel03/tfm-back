const Calories = require('../models/Calories');

async function newRoutineCalories(mailUser, calories) {
    try {
        const food = new Calories({
            mailUser,
            calories,
            fecha: new Date()
        });
        const res = await food.save();
        return res;
    } catch (e) {
        return e;
    }
}

module.exports = { newRoutineCalories };