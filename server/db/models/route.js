const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserRoute, { foreignKey: 'routeId' });
      this.hasMany(models.Chat, { foreignKey: 'routeId' });
      this.hasOne(models.Review, { foreignKey: 'routeId' });
    }
  }
  Route.init({
    time: DataTypes.TIME,
    date: DataTypes.DATE,
    pointA: DataTypes.TEXT,
    pointB: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};
