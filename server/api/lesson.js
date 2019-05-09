const router = require('express').Router()
const {Lesson, Challenge} = require('../db/models')
module.exports = router

//getting all Lessons for a logged in user
router.get('/', async (req, res, next) => {
  try {
    const allLessons = await Lesson.findAll()
    res.json(allLessons)
  }catch (err) {
    next(err)
  }
})

//getting a single lesson for a logged in user
router.get('/:lessonId', async (req, res, next) => {
  try {
    const SingleLesson = await Lesson.findByPk(req.params.lessonId)
    res.json(SingleLesson)
  }catch (err) {
    next(err)
  }
})
//getting all lessons by a topic
router.get('/:topicId', async (req, res, next) => {
  try {
    const allLessons = await Lesson.findByTopic(req.params.topicId)
    res.json(allLessons)
  }catch (err) {
    next(err)
  }
})

// //getting a list of lessons for a logged in user
// router.get('/users', async (req, res, next) => {
//   try {
//     const allLessons = await Lesson.findAll({
//       include: [{model: Challenge}]
//     })
//     res.json(allLessons)
//   } catch (err) {
//     next(err)
//   }
// })

// //gettting a single lesson for a logged in user

// router.get('/users/:lessonId', async (req, res, next) => {
//   try {
//     const SingleLesson = await Lesson.findByPk(req.params.lessonId,{include: [{model: Challenge}]} )
//      res.json(SingleLesson)
//   } catch (err) {
//     next(err)
//   }
// })
// //getting a lesson based of title

router.get('/users/:title', async (req, res, next) => {
  try {
    const lesson = await Lesson.findByTitle(req.params.title, {
      include: [{model: Challenge}]
    })
    res.json(lesson)
  }
  catch (err) {
    next(err)
  }
})