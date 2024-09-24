const router = require('express').Router();

router.get('/', (req, res) => {
    res.end(`Register`);
});

module.exports = router;