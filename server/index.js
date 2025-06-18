import { WebSocketServer } from "ws";

const port = 3000;
const server = new WebSocketServer({ port: port });

server.on("connection", (ws) => {
	ws.on("message", (message) => {
		console.log(`Message: ${message.toString()}`);
		ws.send("Message received");
	});

	ws.on("close", () => {
		console.log("Connection closed");
	});

	ws.on("error", (error) => {
		console.error(`Error: ${error.message}`);
	});
});

server.on("listening", () => {
	console.log(`Listening on port ${port}`);
});
