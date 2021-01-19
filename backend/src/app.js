const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }
    routes() {
        this.server.use(routes);
    }
    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }
}
module.exports = new App().server;
