const app = require('./src/app');
const connectBD = require('./src/config/database');
const http = require('http');
const initWebSocket = require('./src/config/websocket');

(async () => {
    try {
        await connectBD();
        const server = http.createServer(app);
        initWebSocket(server);
        server.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));
    } catch (e) {
        console.error('No se ha podido levantar el servidor:', e);
    }
})();
