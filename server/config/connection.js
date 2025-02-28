const mongoose = require('mongoose');

require('dotenv').config();
const atlasPass = process.env.ATLAS_PASSWD;
const atlasUser = process.env.ATLAS_USER

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${atlasUser}:${atlasPass}@cluster0.ptwwxd7.mongodb.net/musician-match`);

module.exports = mongoose.connection;