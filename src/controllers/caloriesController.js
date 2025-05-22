const { newRoutineCalories, getCalories } = require("../services/caloriesManage");
const newFoodValidator = require("../validations/caloriesValidator");
const jwt = require("jsonwebtoken");
const secretKey = "estoesunaclavesecretaquenadiesabrajamas";

const registerController = {
  newRutineCalories: [
    ...newFoodValidator,
    async (request, response) => {
      try {
        const { calories } = request.body;
        const token = request.cookies.token;
        const decoded = jwt.verify(token, secretKey);
        let mailUser = decoded.mailUser;
        const data = await newRoutineCalories(
          mailUser,
          calories
        );
        console.log(data);
        if (data.code === 11000) {
          const err = new Error("Duplicate key error");
          err.code = 11000;
          throw err;
        } else {
          return response.status(201).json(data);
        }
      } catch (e) {
        if (e.code === 11000) {
          return response
            .status(400)
            .json({ message: "Registro duplicado", code: 11000 });
        }
      }
    },
  ],
  getRutineCalories: [
    async (request, response) => {
      try {
        const token = request.cookies.token;
        const decoded = jwt.verify(token, secretKey);
        let mailUser = decoded.mailUser;
        const data = await getCalories(mailUser);
        return response.status(201).json(data);
      } catch (e) {
        console.log(e);
      }
    },
  ]
};

module.exports = registerController;
