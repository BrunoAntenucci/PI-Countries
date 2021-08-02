const { Router } = require('express');

const router = Router();

const countriesController = require('../controllers/countries')

router.get('/', countriesController.getFromApi);

router.get('/:id', countriesController.getById);

router.post('/', countriesController.post);

router.put('/:id', countriesController.modify);

router.delete('/:id', countriesController.delete);

module.exports = router;