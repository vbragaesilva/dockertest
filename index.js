const express = require('express');

const PORT = 3210;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!!! 123');
});

app.listen(PORT, HOST);