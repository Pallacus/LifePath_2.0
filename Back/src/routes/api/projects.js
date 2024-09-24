const router = require('express').Router();

router.get('/', (req, res) => {
    res.end(`GET all projects`);
});

module.exports = router;