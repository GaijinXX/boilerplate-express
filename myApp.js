let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => {res.sendFile(__dirname + "/views/index.html")});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => res.json({"message": ( (process.env.MESSAGE_STYLE === "uppercase") ? "HELLO JSON" : "Hello json")}));

app.get('/_api/use-env-vars', (req, res) => {process.env.MESSAGE_STYLE = "uppercase"; res.send({"passed":false})});
































 module.exports = app;
