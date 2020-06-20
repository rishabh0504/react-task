const express = require('express');
const path = require('path');
const { response } = require('express');
var bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.post('/signin', (req, res) => {
    const { userId, password } = req.body;
    if (userId !== 'rishabh' || password !== 'rishabh') {
        res.json({ status: 401, message: 'Invalid Credentials' })
    } else {
        res.json({ status: 200, message: `Welcome ${userId}` })
    }
});
app.get('/signin', (req, res) => {
    res.sendFile(HTML_FILE);
});
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});