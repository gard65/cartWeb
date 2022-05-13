const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.License, { foreignKey: 'licenseId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Driver.init({
    avto: DataTypes.STRING,
    documentationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    licenseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Driver',
  });
  return Driver;
};
