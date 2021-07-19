const { Router } = require('express');

const router = Router();

const { getAllActivities, getActivityById, postActivity, modifyActivity, deleteActivity} = require('../controllers/activities.js')

router.get('/', getAllActivities);

router.get('/:id', getActivityById);

router.post('/', postActivity);

router.put('/:id', modifyActivity);

router.delete('/:id', deleteActivity);

module.exports = router;
