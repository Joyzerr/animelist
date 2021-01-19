const mongo = require('mongoose');

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongo.connect(
         'mongodb+srv://joyce:ieupxqw5@cluster0.hzfzl.mongodb.net/animelist?retryWrites=true&w=majority',
          {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
          }
        );
      }
    }




module.exports = new Database();
