const router = require('express').Router()

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    console.log('from the chatbot api', req.body)
  } catch (err) {
    next(err)
  }
})
