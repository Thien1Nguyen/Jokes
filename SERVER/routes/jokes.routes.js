const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    //get all jokes
    app.get("/api/jokes", JokeController.allJokes)

    //get a single joke
    app.get("/api/jokes/:id", JokeController.oneJoke)

    //create a joke
    app.post("/api/jokes/new", JokeController.createJoke)

    //update a joke
    app.put("/api/jokes/update/:id", JokeController.updateJoke)

    //delete a joke
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)
}