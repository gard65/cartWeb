const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/apiError');
const tokenService = require('./tokenService');
const {
  User, License, Documentation, Driver,
} = require('../../db/models');

class UserService {
  async registration(name, email, telephone, password, gender, age) {
    console.log('==========> reg');
    const candidate = await User.findOne({ where: { email } });
console.log([candidate])
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      name, email, telephone, age, gender, password: hashPassword,
    });
    console.log('======USER=====', user);
    const userDto = {
      email: user.email, id: user.id,
    };
    console.log('=====USER-DTO===', userDto);
    const tokens = await tokenService.generateToken({ ...userDto });
    console.log('=====TOKEN===', tokens);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    console.log('=======> login');
    const user = await User.findOne({
      where: { email },
      include: [
        { model: License }, { model: Documentation },
        { model: Driver },
      ],
    });

    console.log('======USER=====', user);

    const userPars = JSON.parse(JSON.stringify(user));

    console.log('======USERPARS=====', userPars);
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }
    const isCorrectPass = await bcrypt.compare(password, user.password);
    if (!isCorrectPass) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = {
      email: userPars.email,
      name: userPars.name,
      id: userPars.id,
      li: userPars.Licenses[0]?.number,
      pass: userPars.Documentations[0]?.passport,
      avtoNum: userPars.Driver?.avto,
    };

    console.log('=====USER-DTO===', userDto);
    const tokens = await tokenService.generateToken({ ...userDto });

    console.log('=====TOKEN===', tokens);
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
    const userDto = { email: user.email, id: user.id };
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
