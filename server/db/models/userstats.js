const Sequelize = require('sequelize')
const db = require('../db')

const UserStats = db.define('UserStats', {
  isCompleted: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = UserStats
