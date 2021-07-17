const { Router } = require('express');

const router = Router();

const { Activity } = require('../db.js')

router.get('/', (req, res, next) => {
    return Activity.findAll()
        .then(activity => res.send(activity))
        .catch((error) => next(error))
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return Activity.findByPk(id)        
        .then(activity => res.send(activity))
        .catch((error) => next(error))
});

router.post('/', (req, res, next) => {
    const activity = req.body;
    return Activity.create(activity)        
        .then(activity => res.send(activity))
        .catch((error) => next(error))
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const activity = req.body;
    return Activity.update(activity, {where: {id,}})        
        .then(activity => res.send(activity))
        .catch((error) => next(error))
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    return Activity.destroy({where: {id}})        
        .then( () => res.sendStatus(200))
        .catch((error) => next(error))
});

module.exports = router;
