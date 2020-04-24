'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userRoles', [
      {
        name: 'SuperAdmin',
        codeRole: 'SA'
      },
      {
        name: 'Admin',
        codeRole: 'A'
      },
      {
        name: 'User',
        codeRole: 'U'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userRoles', null, {})
  }
}
