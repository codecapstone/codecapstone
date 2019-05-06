const router = require('express').Router()
const {WebhookClient} = require('dialogflow-fulfillment')
const functions = require('firebase-functions')

//Create an instance

module.exports = router

router.post('/', (req, res, next) => {
  try {
    console.log('req.body in chatbot api', req.body)
    const agent = new WebhookClient({request: req.body})
    console.log('chatbot api', agent)
    agent.add(`Nice`)
    console.log('did it add?', agent)

    //     const addResp = agent => {
    //       agent.add('BLAH BLAH BLAH')
    //     }
    //     agent.handleRequest(addResp)
    //   }
    // )

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
