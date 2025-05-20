const { newFood, getFoods, updateFood } = require("../services/foodManage");
const newFoodValidator = require("../validations/foodValidator");

const registerController = {
  newFood: [
    ...newFoodValidator,
    async (request, response) => {
      try {
        const { name, calories } = request.body;
        const photo = request.file;
        const data = await newFood(
          name,
          photo,
          calories,
          "desactivate"
        );
        if (data.code === 11000) {
          const err = new Error("Duplicate key error");
          err.code = 11000;
          throw err;
        } else if (data.code === 11001) {
          const err = new Error("Error Photo");
          err.code = 11001;
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
        if (e.code === 11001) {
          return response
            .status(400)
            .json({ message: "Foto no Valida", code: 11001 });
        }
      }
    },
  ],
  getFood: [
    async (request, res) => {
      try {
        let data;
        if (request.originalUrl.includes("admin")) {
          data = await getFoods('desactivate');
        } else {
          data = await getFoods('activate');
        }
        return res.status(200).json({
          status: 200,
          message: "Comidas",
          food: data,
        });
      } catch (e) {
        console.log("Error al sacar los comidas", e);
        res.status(500).json({ error: "Error interno del servidor" });
      }
    },
  ],
  updateStatusFood: [
    async (req, res) => {
      try {
        const { id } = req.params;
        const userData = req.body;
        const updatedFood = await updateFood(id, userData);
        console.log(updatedFood);
        res.status(200).json({ status: 200, name: updatedFood.name });
      } catch (e) {
        console.log("Error al actualizar usuario", e);
        res.status(500).json({ error: "Error al actualizar usuario" });
      }
    },
  ]
};

module.exports = registerController;
