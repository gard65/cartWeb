const router = require('express').Router();
const { body } = require('express-validator');
const indexController = require('../controllers/indexController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post(
  '/signUp',
  body('email').isEmail().withMessage('Email is not valid'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  indexController.registration,
);
router.post('/login', indexController.login);
// router.post('/logout', userController.logout);
// router.get('/activate/:link', userController.activate);
// router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, indexController.getUsers);

module.exports = router;
