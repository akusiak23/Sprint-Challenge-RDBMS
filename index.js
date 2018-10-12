const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = './knexfile.js';
const db = knex(knexConfig.development);

const server = express();

server.use(express.json(), helmet());

// ===================== END POINTS ======================

server.get('/', (req, res) => {
    res.json('Server running');
});

// ===================== SERVER ==========================

const port = 8000;
server.listen(port, () => {
    console.log(`API is listening on port ${port}`)
});