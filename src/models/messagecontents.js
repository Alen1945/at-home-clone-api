'use strict'
module.exports = (sequelize, DataTypes) => {
  const messageContents = sequelize.define('messageContents', {
    messageId: DataTypes.INTEGER,
    pathContent: DataTypes.STRING,
    isDelete: DataTypes.TINYINT
  }, {})
  messageContents.associate = function (models) {
    messageContents.belongsTo(models.alarmMessages, { foreignKey: 'messageId', targetKey: 'id' })
  }
  return messageContents
}
