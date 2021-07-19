const { Router } = require('express');

const router = Router();

const { getAllCountries, getCountryById, postCountry, modifyCountry, deleteCountry } = require('../controllers/countries')

router.get('/', getAllCountries);

router.get('/:id', getCountryById);

router.post('/', postCountry);

router.put('/:id', modifyCountry);

router.delete('/:id', deleteCountry);

module.exports = router;