const Anime = require('../models/Anime');
class AnimeController {
    async create(req,res) {
        const anime = await Anime.create(req.body);
    
        return res.json(anime);
    }
    async index(req,res) {
        const animes = await Anime.find();
        return res.json(animes);
    }
    async show(req,res) {
        const anime = await Anime.findById(req.params.id);
        return res.json(anime);
    }
    async update(req,res) {
        const {id}= req.params;
        const edit = await Anime.findByIdAndUpdate(id,req.body,{new: true});
        return res.json(edit);
    }
    async delete(req,res) {
        const {id}= req.params;
        await Anime.findOneAndDelete(id);
        return res.json('anime deletado');
    }
}
module.exports = new AnimeController();