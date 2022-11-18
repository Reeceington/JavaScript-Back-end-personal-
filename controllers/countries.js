// Gain access to our database connection
const pool = require("../Data/config");

const getAllCountries = (request, response) => {
    pool.query(`SELECT * FROM country`, (error, result) => {
        // If we get an error, throw it (this works like a "return" statement)
        if (error){
            throw error;
        }

        // Log the result of the database call to the console.
        console.log(result);

        // Pass the results of the database call to the countries view
        response.render("../views/pages/countries", {
            title: "Countries",
            countriesArray: result
        });
    });
};
const getCountryById = (request, response, next) => {
    const id = request.params.id;
    pool.query(`SELECT * FROM country WHERE country_id = ?`, 
  id, (error, result) => {
            if (error){
                throw error;
            }
 
            console.log(result);
            response.render("../views/pages/countries", {
                countriesArray: result,
                title: "Country"
            });
        });
};

const addCountry = (request, response, next) => {
    console.log("Add country");
    console.log(request.body);
    pool.query("INSERT INTO country SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect(`/countries`);
    });
};

const editCountry = (request, response, next) => {
    const id = request.params.id;
    console.log(request.body);
    pool.query(`UPDATE country SET ? WHERE country_id = ?`,
      request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect(`/countries`);
    });  
};


const deleteCountry = (request, response, next) => {
    const id = request.params.id;

    pool.query(`DELETE FROM WHERE country_id = ?`,
      request.body, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect(`/countries`);
    });  
};

// Make this script available elsewhere with the "require" statement
module.exports = {
    getAllCountries, 
    getCountryById,
    addCountry,
    editCountry,
    deleteCountry
}; console.log("this is sparta!")