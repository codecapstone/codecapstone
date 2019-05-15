const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/challenges', require('./challenge'))
router.use('/chatbot', require('./chatbot'))
router.use('/lessons', require('./lesson'))
router.use('/topics', require('./topic'))
router.use('/userstats', require('./userStats'))
<<<<<<< HEAD
router.use('/currentChallenge', require('./currentChallenge'))
=======
router.use('/userInput', require('./userInput'))
>>>>>>> master

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
