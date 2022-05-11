const {
  License, Documentation, Driver, User, Avatar,
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
      }).json(userData);
      // return res.json(userData);
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
      // await License.upsert({ userId, number });
      // await Documentation.upsert({ userId, passport });
      // await Driver.upsert({ userId, avto });

      const user = await User.findByPk(userId);
      user.name = name;
      user.telephone = telephone;
      user.age = age;
      user.gender = gender;
      await user.save();

      const passportNum = await Documentation.findOne({ where: { userId } });
      if (passportNum) {
        passportNum.passport = passport;
        await passportNum.save();
      } else {
        await Documentation.create({ passport, userId });
      }

      const license = await License.findOne({ where: { userId } });
      if (license) {
        license.number = number;

        await license.save();
      } else {
        await License.create({ number, userId });
      }

      const avtoNum = await Driver.findOne({ where: { userId } });
      if (avtoNum) {
        avtoNum.avto = avto;
        await avtoNum.save();
      } else {
        await Driver.create({
          avto, userId,
        });
      }

      // const numberFromDb = License.findOne({ where: { id: userId } });
      // const passportFromDb = Documentation.findOne({ where: { id: userId } });
      // const avtoFromDb = Driver.findOne({ where: { id: userId } });
      res.json({ passport: !!passportNum.passport, avtoNum: !!avtoNum.avto, driverLicense: !!license.number });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserInfo(req, res, next) {
    try {
      const userId = Number(req.params.id);
      const passport = await Documentation.findOne({ where: { userId } });
      const license = await License.findOne({ where: { userId } });
      const avto = await Driver.findOne({ where: { userId } });
      const user = await User.findByPk(userId, { raw: true, attributes: { exclude: ['email', 'password', 'id'] } });
      // user.passport = passport.passport;
      // res.json(user);
      res.json({
        ...user,
        passport: passport?.passport,
        number: license?.number,
        avto: avto?.avto,
      });
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
