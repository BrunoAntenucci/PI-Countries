const { Router } = require('express');

const router = Router();

const countriesController = require('../controllers/countries')

router.get('/', countriesController.getAllElements);

router.get('/:id', countriesController.getElementById);

router.post('/', countriesController.postElement);

router.put('/:id', countriesController.modifyElement);

router.delete('/:id', countriesController.deleteElement);

module.exports = router;