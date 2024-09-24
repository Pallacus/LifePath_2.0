const router = require('express').Router();

router.get('/', (req, res) => {
    res.end(`GET all the experiences`);
});

module.exports = router;