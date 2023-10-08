connected to database
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://vikassinghyadav6:ot9cfaHIUpqEab5U@cluster1.9oquvxy.mongodb.net/Issues_Tracker`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to mongodb"));
db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});
module.exports = db;


