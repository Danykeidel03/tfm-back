const { newExercise, getExercises, updateExercise } = require("../services/exerciseManage");
const newExerciseValidator = require("../validations/exerciseValidator");

const registerController = {
  newExercise: [
    ...newExerciseValidator,
    async (request, response) => {
      try {
        const { name, muscle, description, calories, photo } = request.body;
        console.log(photo);
        const data = await newExercise(
          name,
          photo,
          muscle,
          description,
          calories,
          "desactivate"
        );
        console.log(data);
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
  getExercise: [
    async (request, res) => {
      try {
        const { muscle } = request.params;
        let data;
        if (request.originalUrl.includes("admin")) {
          data = await getExercises(muscle, 'desactivate');
        }else{
          data = await getExercises(muscle, 'activate');
        }
        return res.status(200).json({
          status: 200,
          message: "Ejercicios",
          muscles: data,
        });
      } catch (e) {
        console.log("Error al sacar los ejercicios", e);
        res.status(500).json({ error: "Error interno del servidor" }); // Añadir manejo de error
      }
    },
  ],
  updateStatusExercise: [
    async (req, res) => {
      try {
        const { id } = req.params;
        const userData = req.body;
        const updatedExercise = await updateExercise(id, userData);
        console.log(updatedExercise);
        res.status(200).json({ status: 200, name: updatedExercise.name });
      } catch (e) {
        console.log("Error al actualizar usuario", e);
        res.status(500).json({ error: "Error al actualizar usuario" });
      }
    },
  ]
};

module.exports = registerController;
