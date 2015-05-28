var mongoose = require("mongoose");
mongoose.connect();

module.exports.User = require("./user");


mongoose.connect( process.env.MONGOLAB_URI ||
               process.env.MONGOHQ_URL || 
               "mongodb://localhost/library_app")