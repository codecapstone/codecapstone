const router = require('express').Router()

let agent = {hello: 'hi there'}

//Create an instance

module.exports = router

router.post('/', (req, res, next) => {
  try {
    console.log('req.body in chatbot api', req.body)
    agent.example = req.body.queryResult.queryText
    console.log('agent in the chatbot api', agent)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.get('/', (req, res, next) => {
  try {
    res.send(agent)
  } catch (err) {
    next(err)
  }
})
