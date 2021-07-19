const { Country } = require('../db.js');
const ModelCrud = require('./index.js');

const countriesController = new ModelCrud(Country);

module.exports = countriesController;