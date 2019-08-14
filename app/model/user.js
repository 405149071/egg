'use strict'

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(50),
    password: STRING(50),
    // age: INTEGER,
  })

  User.associate = function() {
    app.model.User.hasMany(app.model.Daily, {
      foreignKey: 'user_id',
      targetKey: 'id',
    })
  }

  return User
}
