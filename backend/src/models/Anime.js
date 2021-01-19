const mongo = require('mongoose');
const Anime = new mongo.Schema(
    {
        name: String,
        numberEpisodes: Number,
        status: {
            type: Boolean,
            default: false
        }
})
module.exports = mongo.model('Anime',Anime);