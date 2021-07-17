const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('ruta countries');
});

module.exports = router;
