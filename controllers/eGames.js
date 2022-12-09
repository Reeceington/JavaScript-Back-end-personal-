// Gain access to our database connection
const pool = require("../Data/config");

const getAllGames = (request, response) => {
    pool.query(`SELECT * FROM game`, (error, result) => {
        // If we get an error, throw it (this works like a "return" statement)
        if (error){
            throw error;
        }

        // Log the result of the database call to the console.
        console.log(result);

        // Pass the results of the database call to the countries view
        response.render("../views/pages/games", {
            title: "Games",
            gameArray: result
        });
    });
};
const getGameById = (request, response, next) => {
    const id = request.params.id;
    pool.query(`SELECT * FROM game WHERE game_id = ?`, 
  id, (error, result) => {
            if (error){
                throw error;
            }
 
            console.log(result);
            response.render("../views/pages/game", {
                game: result[0],
                title: "Games"
            });
        });
};

const addGame = (request, response, next) => {
    console.log("Add game");
    console.log(request.body);
    pool.query("INSERT INTO game SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect(`/games`);
    });
};

const deleteGame = (request, response, next) => {
    const id = request.params.id;

    pool.query(`DELETE FROM game WHERE game_id = ?`,
     id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect(`/games`);
    });  
};

// Make this script available elsewhere with the "require" statement
module.exports = {
    getAllGames, 
    getGameById,
    addGame,
    deleteGame
}; console.log("this is sparta!")