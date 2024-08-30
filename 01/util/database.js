// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// let _db;
// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     "mongodb+srv://nikunjpatel:96JK3mBqIDPj6GWR@cluster0.skpu7ya.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
//   )
//     .then((client) => {
//       console.log("Connected");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const getDb = () => {
//     if(_db){
//         return _db;
//     }

//     throw 'No database found!'
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
