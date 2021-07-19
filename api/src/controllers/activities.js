const { Activity } = require('../db.js')

function getAllActivities(req, res, next) {
    return Activity.findAll()
        .then(activity => res.send(activity))
        .catch((error) => next(error))
};

function getActivityById(req, res, next) {
    const id = req.params.id;
    return Activity.findByPk(id)        
        .then(activity => res.send(activity))
        .catch((error) => next(error))
};

function postActivity(req, res, next) {
    const activity = req.body;
    return Activity.create(activity)        
        .then(activity => res.send(activity))
        .catch((error) => next(error))
};

function modifyActivity(req, res, next) {
    const id = req.params.id
    const activity = req.body;
    return Activity.update(activity, {where: {id,}})        
        .then(activity => res.send(activity))
        .catch((error) => next(error))
};

function deleteActivity (req, res, next) {
    const id = req.params.id
    return Activity.destroy({where: {id}})        
        .then( () => res.sendStatus(200))
        .catch((error) => next(error))
};

module.exports = {
    getAllActivities,
    getActivityById,
    postActivity,
    modifyActivity,
    deleteActivity
}