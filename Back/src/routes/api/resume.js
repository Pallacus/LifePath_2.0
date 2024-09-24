const router = require('express').Router();

router.get('/', (req, res) => {
    res.end(`GET all resumes`);
});

module.exports = router;