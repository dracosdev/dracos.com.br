const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/game", function(req, res){
	res.sendFile(__dirname + "/game/index.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

// expõe publicamente a pasta game
app.use(express.static(__dirname + '/game'))