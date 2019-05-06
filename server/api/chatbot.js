const router = require('express').Router()

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    console.log('from the chatbot api', req.body)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    res.json('hello')
  } catch (err) {
    next(err)
  }
})
