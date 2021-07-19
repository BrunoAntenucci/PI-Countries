const { Country } = require('../db.js');
const ModelCrud = require('./index.js');
const axios = require('axios')



class CountriesModel extends ModelCrud {
    constructor(model) {
        super(model)
    }
    /*getFromApi = (req, res, next) => {
        const country = this.model.findAll();
        const apiCountries = axios.get('https://restcountries.eu/rest/v2/all');
        return res.json(apiCountries.data)
    };*/
}

const countriesController = new CountriesModel(Country);

module.exports = countriesController;