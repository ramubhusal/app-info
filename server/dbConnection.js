const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://admin:admin@rootdb.h0ypy.mongodb.net/appInfo?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).catch(err => {
    console.log(`Error occurred. ${err}`);
})

const dbConn = mongoose.connection;

module.exports = dbConn;