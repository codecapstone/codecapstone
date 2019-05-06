const router = require('express').Router()
const {WebhookClient} = require('dialogflow-fulfillment')
const functions = require('firebase-functions')

//Create an instance

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    console.log('req.body in chatbot api', req.body)
    const agent = new WebhookClient({request: req.body, response: response})
    console.log('chatbot api', agent)
    agent.add(`Nice`)

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
