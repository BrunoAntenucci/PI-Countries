const { Country } = require('../db.js');
const ModelCrud = require('./index.js');
const axios = require('axios')



class CountriesModel extends ModelCrud {
    constructor(model) {
        super(model)
    }
    getFromApi = (_req, res, next) => {
        const myCountry = this.model.findAll();
        const apiCountries = axios.get('https://restcountries.eu/rest/v2/all');
        Promise.all([myCountry, apiCountries])
            .then((results) => {
                const [myResult, apiResult] = results;
                const aux = []
                apiResult.data.forEach(element => { aux.push(
                    {
                        id: element.alpha3Code,
                        name: element.name,
                        flag: element.flag,
                        continent: element.region,
                        capital: element.capital,
                        subregion: element.subregion,
                        area: element.area,
                        population: element.population
                    })
                });
                const response = myResult.concat(aux);
                res.send(response)
            })
            .catch((error) => next(error))
    };
}

const countriesController = new CountriesModel(Country);

module.exports = countriesController;