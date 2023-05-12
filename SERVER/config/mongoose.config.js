const mongoose = require('mongoose');

// In you I trust with my mongoDB info <3.
const dbName = "jokesclouddb";
const username = "lumbiemushie";
const pw = "BhBQdzTgkxkIl0oy";

const uri = `mongodb+srv://${username}:${pw}@cluster0.zppu85g.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("It's Time To Duel!"))
    .catch(err => console.log("Send You To The Shadow Realm: ", err));
