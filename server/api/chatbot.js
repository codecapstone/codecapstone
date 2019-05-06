const router = require('express').Router()

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    let agent = req.body
    agent.response = 'BLAH BLAH BLAH'

    res.send(agent)
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
