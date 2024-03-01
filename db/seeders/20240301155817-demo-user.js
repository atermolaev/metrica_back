'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@mail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        login: 'demouser',
        pass: 'demouser1'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {});
  }
};
