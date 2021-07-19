const { Activity } = require('../db.js')
const ModelCrud = require('./index.js');

const activitiesController = new ModelCrud(Activity);

module.exports = activitiesController;