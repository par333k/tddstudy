const dotenv = require('dotenv');

dotenv.config();

const config = {
    MongoDBURI : process.env.MongoDBURI
}

module.exports = config;
