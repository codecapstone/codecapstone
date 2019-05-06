const Sequelize = require('sequelize')
const db = require('../db')

const Challenge = db.define('challenge', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sandboxId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prompt: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  functionName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tests: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  solutions: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  keywords: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  examples: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Challenge