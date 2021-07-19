const { Router } = require('express');

const router = Router();

const activitiesController = require('../controllers/activities.js')

router.get('/', activitiesController.getAll);

router.get('/:id', activitiesController.getById);

router.post('/', activitiesController.post);

router.put('/:id', activitiesController.modify);

router.delete('/:id', activitiesController.delete);

module.exports = router;
