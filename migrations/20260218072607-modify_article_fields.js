'use strict';
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Articles', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Articles', 'slug', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }),
      queryInterface.changeColumn('Articles', 'image', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Articles', 'body', {
        type: Sequelize.TEXT,
        allowNull: false
      }),
      queryInterface.changeColumn('Articles', 'published', {
        type: Sequelize.DATE,
        allowNull: false
      })
    ])
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Articles', 'name', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('Articles', 'slug', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('Articles', 'image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('Articles', 'body', {
        type: Sequelize.TEXT
      }),
      queryInterface.changeColumn('Articles', 'published', {
        type: Sequelize.DATE
      })
    ])
  }
}
