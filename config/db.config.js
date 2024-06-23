const mongoose = require('mongoose');

const uri =
    'mongodb+srv://lenchukyurii:QWEa1234@cluster0.uaxwfmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectToDb() {
    await mongoose.connect(uri);
}

mongoose.connection.on('error', err => {
    console.log(err);
});

module.exports = () =>
    connectToDb()
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch(console.log);
