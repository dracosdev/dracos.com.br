const express = require('express');
const app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/game", function(req, res){
	res.sendFile(__dirname + "/game/index.html");
});

app.listen(8080);
console.log('Servidor rodando na porta 8080...');