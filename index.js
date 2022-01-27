const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/game", function(req, res){
	res.sendFile(__dirname + "/game/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})