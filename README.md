# tfm-back

Este proyecto es una API RESTful desarrollada en Node.js con Express y MongoDB para la gestión de usuarios, alimentos, ejercicios, calorías y chat en tiempo real. Está pensada para servir como backend de una aplicación de salud y fitness.

## Características principales

- **Gestión de usuarios**: Registro, login, actualización, borrado y control de roles (usuario/admin).
- **Gestión de alimentos**: Alta, consulta y actualización de estado de alimentos.
- **Gestión de ejercicios**: Alta, consulta y actualización de estado de ejercicios.
- **Gestión de calorías**: Registro y consulta de calorías consumidas por usuario.
- **Chat en tiempo real**: Comunicación entre usuarios mediante WebSocket.
- **Validaciones**: Validación de datos de entrada usando `express-validator`.
- **Autenticación y autorización**: JWT y control de roles.
- **Protección y seguridad**: Uso de Helmet, CORS, rate limiting y saneamiento de datos.
- **Envío de emails**: Notificación de registro de usuario vía correo electrónico.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <url-del-repositorio>
   cd tfm-back
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura las variables de entorno si es necesario (por ejemplo, para el puerto o credenciales de email).

## Uso

1. Inicia el servidor:
   ```sh
   node server.js
   ```

2. El servidor escuchará por defecto en el puerto `3000`.

## Endpoints principales

- **Usuarios**: `/user`
- **Alimentos**: `/food`
- **Ejercicios**: `/exercise`
- **Calorías**: `/calories`

Consulta las rutas en la carpeta [`src/routes`](src/routes) para más detalles.

## Estructura del proyecto

- [`src/app.js`](src/app.js): Configuración principal de la app Express.
- [`src/controllers`](src/controllers): Lógica de negocio de cada recurso.
- [`src/models`](src/models): Modelos de datos de Mongoose.
- [`src/services`](src/services): Servicios para acceso a datos y lógica auxiliar.
- [`src/middlewares`](src/middlewares): Middlewares de autenticación, validación y manejo de errores.
- [`src/validations`](src/validations): Validaciones de datos de entrada.
- [`src/config`](src/config): Configuración de base de datos, email y WebSocket.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- WebSocket (ws)
- Nodemailer
- Helmet, CORS, express-rate-limit

## Autor

Daniel Keidel

---

> Para cualquier duda o mejora, abre un issue o contacta al autor.

###

<h2 align="left">Programado Con</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" height="40" alt="fastapi logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="fastapi logo"  />
</div>

###