const router = require('express').Router();
const upload = require('../middlewares/uploadMiddle');
const { Avatar } = require('../../db/models');

router.get('/', (req, res) => {
  res.render('avatar');
});

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    try {
      await Avatar.create({ ...req.body, img: req.file.filename });
      console.log(req.body, req.file);
      res.json(req.file);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
