const router = require('express').Router();
const { Op } = require('sequelize');
const { Route, UserRoute, User } = require('../../db/models');

router.get('/:role', async (req, res) => {
  try {
    const { role } = req.params;
    const routes = await UserRoute.findAll({
      where: { driver: role },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Route,

        },
      ],
    });
    console.log('routes', routes);
    res.json(routes);
  } catch (error) {
    console.log(error);
  }
});

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        time, date, pointA, pointB, userId, isDriver,
      } = req.body;
      const newRoute = await Route.create({ ...req.body });
      await UserRoute.create({ routeId: newRoute.id, userId, driver: isDriver });
      res.json(newRoute);
    } catch (error) {
      console.log(error);
    }
  });
router.route('/:id')
  .delete(async (req, res) => {
    try {
      await Route.destroy({ where: { id: Number(req.params.id) } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res) => {
    try {
      const {
        time, date, pointA, pointB,
      } = req.body;
      await Route.update({
        time, date, pointA, pointB,
      }, { where: { id: Number(req.params.id) } });
      const result = await Route.findOne({ where: { id: Number(req.params.id) } });
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  });

router.get('/history/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const history = await UserRoute.findAll({

      where: { userId: id },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Route,
          where: { date: { [Op.lt]: new Date() } },
        },
      ],
      // raw: true,
    });
    console.log("=======>", history);
    console.log('.........', new Date());
    res.json(history);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
