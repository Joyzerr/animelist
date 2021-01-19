const mongo = require('mongoose');
const Anime = new mongo.Schema(
    {
        name: String,
        numberEpisodes: Number,
})
module.exports = mongo.model('Anime',Anime);