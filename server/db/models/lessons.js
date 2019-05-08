const Sequelize = require('sequelize')
const db = require('../db')

const Lesson = db.define('lesson', {
  title: {
    type: Sequelize.ENUM(
      'Dynamic Programming',
      'Arrays',
      'Linked Lists',
      'Hash Tables',
      'Trees'
    ),
    allowNull: false
  },
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
Lesson.findByTitle = function(title) {
  return this.findAll({
    where: {
      level: {[Sequelize.Op.eq]: title}
    }
  })
}

module.exports = Lesson
