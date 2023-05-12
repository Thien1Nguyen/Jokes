const Jokes = require("../models/jokes.model")

//get all jokes
module.exports.allJokes = (req,res) =>{
    Jokes.find()
    .then((allJokes) => {res.json({results: allJokes})})
    .catch(err => res.json({err: err}))
}

//get one joke by id
module.exports.oneJoke = (req,res) =>{
    Jokes.findOne({_id: req.params.id})
    .then(joke => {res.json({results: joke})})
    .catch(err => res.json({err: err}))
}

//create a joke
module.exports.createJoke = (req,res) =>{
    Jokes.create(req.body)
    .then((newJoke) => {res.json({results: newJoke})})
    .catch(err => res.json({err: err}))
}

//update a joke
module.exports.updateJoke = (req,res) =>{
    // :x make sure for the req.body it's actually req and not res Thien
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(newJoke => {res.json({results: newJoke})})
        .catch(err => res.json({err: err}))
}

//delete a joke
module.exports.deleteJoke = (req,res) =>{
    Jokes.deleteOne({_id: req.params.id})
        .then(deleteJoke => {res.json({results: deleteJoke})})
        .catch(err => res.json({err: err}))
}
