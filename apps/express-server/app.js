const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/person", (req, res) => {
	console.log(req.body);
	res.sendStatus(201);
});

app.listen(3000);
