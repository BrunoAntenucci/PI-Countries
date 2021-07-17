const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const countriesRoutes = require('./countries.js');
const activitiesRoutes = require('./activities.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRoutes);
router.use('/activities', activitiesRoutes);

module.exports = router;
