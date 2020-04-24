'use strict'
module.exports = (sequelize, DataTypes) => {
  const alarmMessages = sequelize.define('alarmMessages', {
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    isDelete: DataTypes.TINYINT
  }, {})
  alarmMessages.associate = function (models) {
    alarmMessages.belongsTo(models.users, { foreignKey: 'userId', targetKey: 'id' })
    alarmMessages.hasMany(models.messageContents, { foreignKey: 'messageId' })
  }
  return alarmMessages
}
