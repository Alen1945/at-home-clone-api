'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      userId: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        unique: true
      },
      fullName: {
        type: Sequelize.STRING(80)
      },
      email: {
        type: Sequelize.STRING(80),
        validate: {
          isEmail: true
        }
      },
      gender: {
        type: Sequelize.ENUM(['others', 'male', 'female']),
        defaultValue: 'others'
      },
      picture: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      isDelete: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userProfiles')
  }
}
