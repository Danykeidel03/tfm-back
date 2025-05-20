<h1 align="left">Hola, como estais?</h1>

###

<p align="left">Mi nombre es Daniel Fernandez Fernandez y este es mi Proyecto Final de Node</p>

###

<h2 align="left">Sobre el Proyecto</h2>

###

<p align="left">1. Funciones para usuarios registrados:<br><br>    Login: Permite iniciar sesión con un usuario previamente registrado.<br><br>    Register: Permite crear una nueva cuenta de usuario.<br><br>    Agregar ejercicio: El usuario puede agregar tareas relacionadas a su rutina de ejercicios.<br><br>    Agregar comida: Permite registrar comidas consumidas.<br><br>    Finalizar rutina: Marca la rutina diaria como finalizada.<br><br>    Chat en vivo: Acceso a un chat en tiempo real con otros usuarios.<br>    (Disponible solo si el usuario ha iniciado sesión)<br><br>2. Funciones exclusivas para administradores:<br><br>Además de todas las funciones de los usuarios registrados, el administrador puede:<br><br>    Panel de administración: Acceder a un panel especial para gestionar el contenido y usuarios.<br><br>    Aprobar comidas: Revisar y aprobar comidas registradas por los usuarios.<br><br>    Aprobar ejercicios: Revisar y aprobar nuevos ejercicios.<br><br>    Eliminar usuarios: Borrar cuentas de usuario desde el panel.</p>

###

<h2 align="left">Instalacion</h2>

###

<p align="left">1.    Clona el repositorio:<br><br>git clone https://github.com/Danykeidel03/ejercicio-final-node.git<br>cd ejercicio-final-node<br><br>2. Instala las dependencias:<br><br>npm install<br><br>3. Inicia la aplicación:<br><br>node ./server.js</p>

###

<h2 align="left">Decisiones tecnicas</h2>

###

<p align="left">Node.js como backend:<br>Se eligió Node.js por su rapidez, arquitectura orientada a eventos y la facilidad para construir APIs RESTful de manera eficiente. Su capacidad para manejar múltiples conexiones concurrentes hace que sea una opción ideal para aplicaciones interactivas y en tiempo real.<br><br>Arquitectura modular:<br>La arquitectura modular se implementó separando las funcionalidades en rutas y controladores específicos para cada recurso, lo que mantiene el código organizado y escalable. Esto facilita la adición de nuevas funcionalidades sin comprometer la estructura existente.<br><br>Autenticación con JWT (JSON Web Tokens):<br>Se utiliza JWT para manejar sesiones de usuarios de forma segura. El uso de tokens evita la necesidad de mantener sesiones en el servidor, haciendo que la aplicación sea más escalable y eficiente. Los tokens contienen toda la información necesaria para verificar la identidad del usuario sin necesidad de almacenar la sesión en el servidor.<br><br>Restricción por roles:<br>Se implementó un sistema de roles para diferenciar claramente los permisos entre usuarios comunes y administradores. Los administradores tienen acceso a funcionalidades adicionales, como la aprobación de comidas y ejercicios, y la eliminación de usuarios, mientras que los usuarios comunes solo pueden interactuar con su rutina personal.<br><br>Middleware personalizado:<br>Se utilizan middlewares personalizados para verificar la autenticación de los usuarios antes de permitirles acceder a rutas protegidas. También se usan para validar los datos que se envían y para controlar el acceso según el rol del usuario, asegurando que solo los usuarios con permisos adecuados puedan realizar ciertas acciones.<br><br>Persistencia en base de datos MongoDB :<br>Se eligió una base de datos NoSQL como MongoDB debido a su flexibilidad y facilidad para manejar datos estructurados de manera dinámica. MongoDB es ideal para almacenar datos como usuarios, rutinas y comidas, ya que permite modificaciones rápidas y adaptables a las necesidades cambiantes del proyecto.<br><br>Chat en vivo con WebSockets:<br>Se implementó el chat en vivo utilizando Socket.io para habilitar la comunicación en tiempo real entre los usuarios. Esta solución permite que los mensajes se envíen y reciban instantáneamente, mejorando la experiencia del usuario al interactuar en tiempo real. El chat solo está disponible para usuarios autenticados, y los mensajes se distribuyen de manera eficiente a todos los usuarios conectados a través de WebSockets.</p>

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
</div>

###
