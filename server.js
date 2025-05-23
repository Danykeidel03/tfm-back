const app = require('./src/app');
const connectBD = require('./src/config/database');
const http = require('http');
const initWebSocket = require('./src/config/websocket');

(async () => {
    try {
        await connectBD();
        const server = http.createServer(app);
        initWebSocket(server);
        const PORT = process.env.PORT || 3000;
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (e) {
        console.error('No se ha podido levantar el servidor:', e);
    }
})();
