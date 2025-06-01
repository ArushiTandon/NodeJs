const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;
const mongoConnect = (callback) => {
    
    MongoClient.connect('mongodb+srv://arushitandon007:PSuSG0xa4gyjjw6G@cluster0.jwciwob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    
    .then(client => {
        console.log('Connected to Db');
        db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
        
    })

}

const getDb = () => {
    if(db) {
        return db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;