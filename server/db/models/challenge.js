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
  },
  level: {
    type: Sequelize.ENUM('Easy', 'Medium', 'Hard')
  },
  creditTo: {
    type: Sequelize.STRING
  }
})

Challenge.findByLevel = function (specificLevel) {
  return this.findAll({
    where: {
      level:{[Sequelize.Op.eq]: specificLevel}
    }
  })
}


Challenge.findByTopic = function(specificTopic) {
  return this.findAll({
    where: {
      level: {[Sequelize.Op.eq]: specificTopic}
    }
  })
}
module.exports = Challenge
