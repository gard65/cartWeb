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
      console.log('====EMAIL', email, password);
      const userData = await userService.login(email, password);
      console.log('====================================');
      console.log('USERDATA', userData);
      console.log('====================================');
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

      console.log('====REGBODY===', req.body);

      const user = await User.findByPk(userId);
      user.name = name;
      user.telephone = telephone;
      user.age = age;
      user.gender = gender;
      await user.save();

      let passportNum = await Documentation.findOne({ where: { userId } });
      if (passportNum) {
        passportNum.passport = passport;
        await passportNum.save();
      } else {
        passportNum = await Documentation.create({ passport, userId });
      }

      let license = await License.findOne({ where: { userId } });
      if (license) {
        license.number = number;

        await license.save();
      } else {
        license = await License.create({ number, userId });
      }

      let avtoNum = await Driver.findOne({ where: { userId } });
      if (avtoNum) {
        avtoNum.avto = avto;
        await avtoNum.save();
      } else {
        avtoNum = await Driver.create({
          avto, userId,
        });
      }
      console.log('====================================');
      console.log(passportNum);
      console.log('====================================');
      res.json({ passport: !!passportNum.passport, avtoNum: !!avtoNum.avto, driverLicense: !!license.number });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserInfo(req, res, next) {
    try {
      const userId = Number(req.params.id);
      // const avatar = await Avatar.findOne({ where: { userId}})
      const passport = await Documentation.findOne({ where: { userId } });
      const license = await License.findOne({ where: { userId } });
      const avto = await Driver.findOne({ where: { userId } });
      const user = await User.findByPk(userId, { raw: true, attributes: { exclude: ['email', 'password', 'id'] } });
      // user.passport = passport.passport;
      // res.json(user);
      res.json({
        ...user,
        // avatar: avatar?.img,
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
      }).json(userData);

      // return await res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
