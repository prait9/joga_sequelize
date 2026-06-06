'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      {
        name: 'ashtanga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vinyasa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'yoga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
