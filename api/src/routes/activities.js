const { Router } = require('express');

const router = Router();

const activitiesController = require('../controllers/activities')

router.get('/', activitiesController.getAllElements);

router.get('/:id', activitiesController.getElementById);

router.post('/', activitiesController.postElement);

router.put('/:id', activitiesController.modifyElement);

router.delete('/:id', activitiesController.deleteElement);

module.exports = router;
