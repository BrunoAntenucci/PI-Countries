const { Country } = require('../db.js')

function getAllCountries(req, res, next) {
    return Country.findAll()
        .then(country => res.send(country))
        .catch((error) => next(error))
};

function getCountryById(req, res, next) {
    const id = req.params.id;
    return Country.findByPk(id)        
        .then(country => res.send(country))
        .catch((error) => next(error))
};

function postCountry(req, res, next) {
    const country = req.body;
    return Country.create(country)        
        .then(country => res.send(country))
        .catch((error) => next(error))
};

function modifyCountry(req, res, next) {
    const id = req.params.id
    const country = req.body;
    return Country.update(country, {where: {id,}})        
        .then(country => res.send(country))
        .catch((error) => next(error))
};

function deleteCountry(req, res, next) {
    const id = req.params.id
    return Country.destroy({where: {id}})        
        .then( () => res.sendStatus(200))
        .catch((error) => next(error))
};

module.exports = {
    getAllCountries,
    getCountryById,
    postCountry,
    modifyCountry,
    deleteCountry
}