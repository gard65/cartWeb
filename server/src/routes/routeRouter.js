const router = require('express').Router();
const { Route } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const routes = await Route.findAll();
      res.json(routes);
    } catch (error) {
      console.log(error);
    }
  })

  .post(async (req, res) => {
    try {
      const {
        time, date, pointA, pointB, userId, userIsDriver
      } = req.body;
      const newRoute = await Route.create({ ...req.body });
      // console.log('=========>', addRoutes);
      // await UserRoute.create({ routeId: newRoute.id, userId, driver: userIsDriver  });
      res.json(addRoutes);
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
module.exports = router;
