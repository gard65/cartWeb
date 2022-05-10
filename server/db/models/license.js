const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class License extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      // this.hasOne(models.Driver, { foreignKey: 'licenseId' });
    }
  }
  License.init({
    number: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'License',
  });
  return License;
};
