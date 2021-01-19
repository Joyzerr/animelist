const { Router } = require("express");
const AnimeController = require ('./controllers/AnimeController');


const routes = new Router();
routes.post('/animes', AnimeController.create);
routes.get('/animes', AnimeController.index);
routes.get('/animes/:id', AnimeController.show);
routes.put('/animes/:id', AnimeController.update);
routes.delete('/animes/:id', AnimeController.delete);





module.exports = routes;