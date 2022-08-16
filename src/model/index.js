const mongoose = require('mongoose');
const username = process.env.dbusername | 'admin';
const password = process.env.dbpassword;
mongodb_url_connection = `mongodb+srv://${username}:${password}@sharpdb.2nmzj.mongodb.net/?retryWrites=true&w=majority;`;


console.log('start connectiong to DB');
mongoose.connect(mongodb_url_connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
console.log('connected to DB successfully');

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
