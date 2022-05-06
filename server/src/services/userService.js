const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const tokenService = require('./tokenService');
const { User } = require('../../db/models');

class UserService {

  async registration(name, email, telephone, password, gender, age) {
    const candidate = await User.findOne({ where: { email } });
    
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      name, email, telephone, age, gender, password: hashPassword,
    });
    const userDto = {
     name: user.name, email: user.email, id: user.id,
    };
    const tokens = await tokenService.generateToken({ ...userDto });
    console.log(tokens);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }
    const isCorrectPass = await bcrypt.compare(password, user.password);
    if (!isCorrectPass) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = { email: user.email, id: user.id };
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findOne({ where: { id: userData.id } });
    const userDto = { email: user.email, login: user.login, id: user.id };
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
