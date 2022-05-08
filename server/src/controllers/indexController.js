const {
  License, Documentation, Driver, User,
} = require('../../db/models');

const userService = require('../services/userService');

class UserController {
  async registration(req, res, next) {
    try {
      const {
        name, email, telephone, password, gender, age,
      } = req.body;
      const userData = await userService.registration(
        name,
        email,
        telephone,
        password,
        gender,
        age,
      );

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async editUserInfo(req, res, next) {
    try {
      const {
        name,
        telephone,
        age,
        gender,
        passport,
        number,
        avto,
        userId,
      } = req.body;
      await License.upsert({ userId, number });
      await Documentation.upsert({ userId, passport });
      await Driver.upsert({ userId, avto });
      await User.upsert({
        userId,
        name,
        telephone,
        age,
        gender,
      });
      const numberFromDb = License.findOne({ where: { id: userId } });
      const passportFromDb = Documentation.findOne({ where: { id: userId } });
      const avtoFromDb = Driver.findOne({ where: { id: userId } });
      res.json({ passport: !!passportFromDb, avtoNum: !!avtoFromDb, driverLicense: !!numberFromDb });
    } catch (error) {
      console.log(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return await res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
