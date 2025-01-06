'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@test.com',
        password: '123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Forrest',
        lastName: 'Gump',
        email: 'forrest@test.com',
        password: '123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Yes',
        lastName: 'Man',
        email: 'yes@test.com',
        password: '123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
