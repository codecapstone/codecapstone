const router = require('express').Router()
const {Lesson, Topic} = require('../db/models')
module.exports = router

//getting all Lessons for a logged in user
router.get('/', async (req, res, next) => {
  try {
    const allLessons = await Lesson.findAll()
    res.json(allLessons)
  } catch (err) {
    next(err)
  }
})

//getting a single lesson for a logged in user
router.get('/:lessonId', async (req, res, next) => {
  try {
    const SingleLesson = await Lesson.findByPk(req.params.lessonId, {
      include: [{model: Topic}]
    })
    res.json(SingleLesson)
  } catch (err) {
    next(err)
  }
})
//getting all lessons by a topic
router.get('/:topicId', async (req, res, next) => {
  try {
    const allLessons = await Lesson.findByTopic(req.params.topicId)
    res.json(allLessons)
  } catch (err) {
    next(err)
  }
})

//posting a lesson
router.post('/', async (req, res, next) => {
  try {
    const newLesson = await Lesson.create(req.body)
    res.send(newLesson)
  } catch (err) {
    next(err)
  }
})
