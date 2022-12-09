// Gain access to our database connection
const pool = require("../Data/config");

const getAllPlayers = (request, response) => {
    pool.query(`SELECT * FROM player`, (error, result) => {
        // If we get an error, throw it (this works like a "return" statement)
        if (error){
            throw error;
        }

        // Log the result of the database call to the console.
        console.log(result);

        // Pass the results of the database call to the countries view
        response.render("../views/pages/players", {
            title: "Players",
            playerArray: result
        });
    });
};
const getPlayersById = (request, response, next) => {
    const id = request.params.id;
    pool.query(`SELECT * FROM player WHERE player_id = ?`, 
  id, (error, result) => {
            if (error){
                throw error;
            }
 
            console.log(result);
            response.render("../views/pages/players", {
                player: result[0],
                title: "Players"
            });
        });
};

const addPlayers = (request, response, next) => {
    console.log("Add game");
    console.log(request.body);
    pool.query("INSERT INTO player SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect(`/players`);
    });
};

const deletePlayers = (request, response, next) => {
    const id = request.params.id;

    pool.query(`DELETE FROM player WHERE player_id = ?`,
     id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect(`/players`);
    });  
};

// Make this script available elsewhere with the "require" statement
module.exports = {
    getAllPlayers, 
    getPlayersById,
    addPlayers,
    deletePlayers
}; console.log("this is sparta!")