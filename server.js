const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.send("Nao tem nada por aqui, tente dar oi ou tchau!")
});

app.get("/oi", (req, res) => {
	res.send("Hello world!");
});

app.get("/tchau", (req, res) => {
	res.send("Goodbye earth!");
});

app.listen(port, () => {
	console.log("listening on port %s", port);
})