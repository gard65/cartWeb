const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRoute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Route, { foreignKey: 'routeId' });
    }
  }
  UserRoute.init({
    userId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER,
    driver: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'UserRoute',
  });
  return UserRoute;
};
