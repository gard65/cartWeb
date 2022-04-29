module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRoutes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      routeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Routes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      driver: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRoutes');
  },
};
