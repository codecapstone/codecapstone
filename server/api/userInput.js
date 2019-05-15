const router = require('express').Router()

module.exports = router

router.post('/:method', (req, res, next) => {
  try {
    req.session.userInput = {}
    req.session.userInput[req.params.method] = req.body.info

    res.send(req.session.userInput[req.params.method])
  } catch (err) {
    next(err)
  }
})

router.get('/', (req, res, next) => {
  try {
    if (req.session.userInput) {
      res.send(req.session.userInput)
    } else {
      res.send({})
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/', (req, res, next) => {
  try {
    req.session.userInput = {}
    res.sendStatus(202)
  } catch (err) {
    next(err)
  }
})
