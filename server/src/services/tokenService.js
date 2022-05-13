require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Token } = require('../../db/models');

class TokenService {
  async generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '10m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {

    console.log('====================================');
    console.log(userId, refreshToken);
    console.log('====================================');
    try {
      const tokenData = await Token.findOne({ where: { userId } });
      console.log('TOKENDATAAAA', tokenData);
      if (tokenData) {
        const updatedToken = await Token.update({ refreshToken }, { where: { userId } });
        console.log('TOKENupdatedTokenDATAAAA', updatedToken);
        return updatedToken;
      }
      const newToken = await Token.create({ refreshToken, userId });

      return newToken;
    } catch (error) {
      console.log(error);
    }

  }

  async removeToken(refreshToken) {
    try {
      const token = await Token.findOne({ where: { refreshToken } });
      if (token) {
        await Token.destroy({ where: { refreshToken } });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findToken(refreshToken) {
    const currToken = await Token.findOne({ where: { refreshToken } });
    return currToken;
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService();
