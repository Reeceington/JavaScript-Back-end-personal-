const router = (app) => {
const countriesController = require("../controllers/countries")
app.get("/countries", countriesController.getAllCountries);
app.get("/countries/:id", countriesController.getCountryById);
app.post("/countries/add", countriesController.addCountry);
app.post("/countries/edit/:id", countriesController.editCountry);
app.post("/countries/delete/:id", countriesController.deleteCountry);

app.get("/", (request, response) => {
    response.render("../views/pages/index", {
        title: "Home"
    });
});

app.get("/about", (request, response) => {
    response.render("../views/pages/about", {
        title: "About"
    });
});

app.get('/animals', (request, response) => {
	let animals = [
		{name: 'Liz', breed: 'Weasel', birthYear: 2020, hasFleas: false},
		{name: 'Maclean', breed: 'Wolf', birthYear: 2019, hasFleas: true},
		{name: 'Dave', breed: 'Dog', birthYear:2018, hasFleas: true} ,
        {name: 'Jerry', breed: 'Cat', birthYear: 2025, hasFleas: false},
        {name: 'Paige', breed: 'dolphin', birthYear: 2022, hasFleas: false},
        {name: 'Larry', breed: 'beaver', birthYear: 2002, hasFleas: true},
        {name: 'Perry', breed: 'Platypus', birthYear: 2003, hasFleas: false}
	];
	let motto = 'Good software requires robust testing';

	response.render('../views/pages/animals', {
		animals: animals,
		motto: motto
	 })
   }); 
  };
module.exports = router;

console.log("Hello")