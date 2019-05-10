const router = require('express').Router()

let agent = {hello: 'hi there'}

//Create an instance

module.exports = router

router.post('/', (req, res, next) => {
  try {
    console.log('req.body in chatbot api', req.body)
    let counter = 0
    agent.example[counter] = req.body.queryResult.queryText
    counter++
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
