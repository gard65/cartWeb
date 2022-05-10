const router = require('express').Router();
const upload = require('../middlewares/uploadMiddle');
const { Avatar } = require('../../db/models');

router.get('/', (req, res) => {
  res.render('avatar');
});

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const avatar = await Avatar.findOne({ where: { userId: Number(id) }, order: [['createdAt', 'DESC']] });
      res.json(avatar);
    } catch (error) {
      console.log(error);
    }
  })
  .post(upload.single('img'), async (req, res) => {
    try {
      const { id } = req.params;
      await Avatar.create({ ...req.body, userId: id, img: req.file.filename });
      console.log(req.body, req.file);
      res.json(req.file);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
