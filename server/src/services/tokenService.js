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
    const tokenData = await Token.findOne({ where: { userId } });
    if (tokenData) {
      const updatedToken = await Token.update({ refreshToken }, { where: { userId } });
      return updatedToken;
    }
    const newToken = await Token.create({ userId, refreshToken });
    return newToken;
  }

  async removeToken(refreshToken) {
    const currToken = await Token.findOne({ where: { userId: refreshToken } });
    await currToken.destroy();
    return currToken;
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
