'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Emma Johnson',
        slug: 'emma-johnson',
        bio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        avatar: 'emma.jpg'
      },
      {
        name: 'Michael Lee',
        slug: 'michael-lee',
        bio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        avatar: 'michael.jpg'
      },
      {
        name: 'Sophia Martinez',
        slug: 'sophia-martinez',
        bio: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        avatar: 'sophia.jpg'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
