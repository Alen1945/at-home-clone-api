'use strict'
module.exports = (sequelize, DataTypes) => {
  const userProfiles = sequelize.define('userProfiles', {
    userId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    picture: DataTypes.TEXT,
    address: DataTypes.TEXT,
    isDelete: DataTypes.TINYINT
  }, {})
  userProfiles.associate = function (models) {
    userProfiles.belongsTo(models.users, { foreignKey: 'userId', targetKey: 'id' })
  }
  return userProfiles
}
