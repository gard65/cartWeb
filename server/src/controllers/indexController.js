const userService = require('../services/userService');

class UserController {
  async registration(req, res, next) {
    try {
      console.log("===========", req.body);
      const {
        name, email, telephone, password, gender, age,
      } = req.body;
      const userData = await userService.registration(name, email, telephone, password, gender, age);

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

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      console.log("++++++++>>>>>",req.cookies);
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      console.log('========', req.cookies);
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
