const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const secretKey = 'estoesunaclavesecretaquenadiesabrajamas';

module.exports = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.token;

        if (!token) {
            console.log("No token provided. Closing WebSocket connection.");
            ws.close();
            return;
        }

        try {
            const decoded = jwt.verify(token, secretKey);
            ws.user = decoded;
            console.log('Cliente WebSocket conectado:', decoded.mailUser);

            ws.on('message', (message) => {
                const messageData = JSON.parse(message);
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN && client !== ws) {
                        client.send(JSON.stringify(messageData));
                    }
                });
            });

            ws.on('close', () => {
                console.log(`Cliente desconectado: ${decoded.mailUser}`);
            });

        } catch (err) {
            console.error('Token inválido:', err.message);
            ws.close();
        }
    });

};
