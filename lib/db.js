const mongoose = require("mongoose");

const DATABASECONNECTION = "mongodb+srv://lesterb:testnode2022@cluster0.sqk1weo.mongodb.net/total?retryWrites=true&w=majority";

const db = mongoose.connect(DATABASECONNECTION, {useUnifiedTopology:true, useNewUrlParser:true});

module.exports = {
    db
}