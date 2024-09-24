const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(`😉👍`)
    res.end(`GET all trainings 😅`);
});

module.exports = router;