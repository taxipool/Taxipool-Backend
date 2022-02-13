const express = require("express");
const app = express();
const bodyParser = require('body-parser')

let port = 3000;

app.use(express.json());

app.get('/', function(req, res) {
    res.send('Test Server');
});

const router = require('./api/index.js');
app.use('/api', router);

app.listen(port, function() {
    console.log(`Server is running on port - ${port}`);
});