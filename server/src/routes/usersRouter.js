const router = require('express').Router();
const indexController = require('../controllers/indexController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registration', indexController.registration);
router.post('/login', indexController.login);
router.post('/logout', indexController.logout);

router.get('/refresh', indexController.refresh);

module.exports = router;
