function handleMessage(ws, rawMessage, wss) {
    try {
        const messageData = JSON.parse(rawMessage);
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === client.OPEN) {
                client.send(JSON.stringify(messageData));
            }
        });
    } catch (err) {
        console.error('Error procesando mensaje:', err);
    }
}

module.exports = {
    handleMessage
};