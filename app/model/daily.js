'use strict'

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize

  const Daily = app.model.define('daily', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(255),
    content: STRING(255),
  })

  // Daily.associate = function() {
  //   app.model.Daily.belongsTo(app.model.User, {
  //     foreignKey: 'user_id',
  //     targetKey: 'id',
  //   })
  // }


  return Daily
}
