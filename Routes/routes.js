const router = (app) => {
const eGamesController = require("../controllers/eGames")
app.get("/games", eGamesController.getAllGames);
app.get("/games/:id", eGamesController.getGameById);
app.post("/games/add", eGamesController.addGame);
//app.post("/games/edit/:id", eGamesController.editGame);
app.post("/games/delete/:id", eGamesController.deleteGame);

app.get("/", (request, response) => {
    response.render("../views/pages/index", {
        title: "Home"
    });
});

app.get("/games", (request, response) => {
    response.render("../Views/pages/games", {
        title: "Games"
    });
});

app.get("/games/:id", eGamesController.getGameById);


app.get("/players", (request, response) => {
    response.render("../Views/pages/players", {
        title: "Players"
    });
});


app.get("/addGame", (request, response) => {
    response.render("../Views/pages/addGame", {
        title: "Add Game"
    });
});

};
module.exports = router;

console.log("Hello")