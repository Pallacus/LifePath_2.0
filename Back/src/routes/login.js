const router = require('express').Router();

router.get('/', (req, res) => {
    res.end(`Login`);
});

module.exports = router;