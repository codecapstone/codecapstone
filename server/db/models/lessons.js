const Sequelize = require('sequelize')
const db = require('../db')

const Lesson = db.define('lesson', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  complexities: {
    type: Sequelize.TEXT
  },
  reference: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

Lesson.findByTopic = function(topicId) {
  return this.findAll({
    where: {
      topicId: {[Sequelize.Op.eq]: topicId}
    }
  })
}
module.exports = Lesson
