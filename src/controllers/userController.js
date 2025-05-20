const {
  resgiterUser,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
  isAdmin,
} = require("../services/userManage");
const emailService = require("../services/emailService");
const createUserValidators = require("../validations/userValidator");
const jwt = require("jsonwebtoken");
const secretKey = "estoesunaclavesecretaquenadiesabrajamas";

const registerController = {
  resgiterUser: [
    ...createUserValidators,
    async (request, response) => {
      try {
        const { name, mail, pass, role, weight, height, activity } =
          request.body;
        const photo = request.file;
        const data = await resgiterUser(
          name,
          mail,
          pass,
          role,
          photo,
          weight,
          height,
          activity
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
          await emailService.sendEmail({ name, email: mail });
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
  loginUser: [
    async (request, res) => {
      try {
        const { mail, pass } = request.body;

        const data = await loginUser(mail, pass);
        if (!data)
          return res
            .status(401)
            .json({ error: "Credenciales inválidas", code: 401 });
        const token = jwt.sign(
          { userId: data._id, rol: data.role, mailUser: data.mail },
          secretKey,
          { expiresIn: "1h" }
        );
        if (request.originalUrl.includes("admin")) {
          if (data.role !== "admin") {
            return res.status(401).json({ error: "Uso Limitado", code: 401 });
          } else {
            res.cookie("token", token, {
              httpOnly: true,
              secure: false,
              sameSite: "Lax",
              maxAge: 3600000,
              path: "/",
            });
            console.log("Cookies metidas");
            return res.status(200).json({
              status: 200,
              message: "Login exitoso",
              user: data.name,
              photo: data.photoName,
              rol: data.role,
            });
          }
        } else {
          res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 3600000,
            path: "/",
          });
          console.log("Cookies metidas");
          return res.status(200).json({
            status: 200,
            message: "Login exitoso",
            user: data.name,
            photo: data.photoName,
            rol: data.role,
          });
        }
      } catch (e) {
        console.log("Error al login", e);
        res.status(500).json({ error: "Error interno del servidor" }); // Añadir manejo de error
      }
    },
  ],
  getUsers: [
    async (request, res) => {
      try {
        const data = await getUsers();
        return res.status(200).json({
          status: 200,
          message: "Users",
          users: data,
        });
      } catch (e) {
        console.log("Error al login", e);
        res.status(500).json({ error: "Error interno del servidor" }); // Añadir manejo de error
      }
    },
  ],
  updateUser: [
    async (req, res) => {
      try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await updateUser(id, userData);
        console.log(updatedUser);
        res.status(200).json({ status: 200, name: updatedUser.name });
      } catch (e) {
        console.log("Error al actualizar usuario", e);
        res.status(500).json({ error: "Error al actualizar usuario" });
      }
    },
  ],
  deleteUser: [
    async (req, res) => {
      try {
        const { id } = req.params;
        const deletedProduct = await deleteUser(id);
        res.status(200).json({ id: deletedProduct._id });
      } catch (e) {
        console.error("Error al eliminar user", e);
        res.status(500).json({ error: "Error al eliminar user" });
      }
    },
  ],
  isAdmin: [
    async (req, res) => {
      try {
        const { name } = req.params;
        const isAdminUser = await isAdmin(name);
        res.status(200).json({ isAdmin: isAdminUser.role });
      } catch (e) {
        res.status(500).json({ error: "User No admin" });
      }
    },
  ],
  logOut: [
    async (req, res) => {
      try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: false,
          sameSite: "Lax",
          path: "/",
        });
        console.log('Cookie eliminada');
        return res.status(200).json({ message: "Sesión cerrada correctamente" });
      } catch (e) {
        res.status(500).json({ error: "Sesion no cerrada" });
      }
    },
  ]
};

module.exports = registerController;
