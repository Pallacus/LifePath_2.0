const router = require('express').Router();

router.use('/register', require('./api/register'));
router.use('/login', require('./api/login'));
router.use('/personal_data', require('./api/personal_data'));
router.use('/experience', require('./api/experience'));
router.use('/training', require('./api/training'));
router.use('/projects', require('./api/projects'));
router.use('/resume', require('./api/resume'));

module.exports = router;