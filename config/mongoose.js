// connected to database
// const mongoose = require('mongoose');
// mongoose.connect(`mongodb+srv://vikassinghyadav6:ot9cfaHIUpqEab5U@cluster1.9oquvxy.mongodb.net/Issues_Tracker`);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, "Error connecting to mongodb"));
// db.once('open', function(){
//     console.log("Connected to Database :: mongodb");
// });
// module.exports = db;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('PROJECT1_ISSUESTACKER'); // Establish connection
    return connection.collection('Wipro'); // creating a collection and naming it also
}

module.exports = getEmpData;
