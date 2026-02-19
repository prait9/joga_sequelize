'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add foreign key constraint
    await queryInterface.addConstraint('Articles', {
      fields: ['author_id'],
      type: 'foreign key',
      name: 'fk_articles_author_id',
      references: {
        table: 'Authors',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Articles', 'fk_articles_author_id');
  }
}
