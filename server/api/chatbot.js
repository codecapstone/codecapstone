const router = require('express').Router()
const {WebhookClient} = require('dialogflow-fulfillment')
const functions = require('firebase-functions')

//Create an instance

module.exports = router

router.post('/', (request, response, next) => {
  try {
    console.log('req.body in chatbot api', request.body)
    const agent = new WebhookClient({request: request.body, response})
    console.log('chatbot api', agent)
    const add = agent => {
      agent.add(`Nice`)
      console.log('did it add?', agent)
    }
    let intentMap = new Map()
    intentMap.set('challenge.example.save', add)

    agent.handleRequest(intentMap)

    //     const addResp = agent => { add .

    //       agent.add('BLAH BLAH BLAH')
    //     }
    //     agent.handleRequest(addResp)
    //   }
    // )

    response.send(agent)
  } catch (err) {
    next(err)
  }
})

router.get('/', (req, res, next) => {
  try {
    res.json('hello')
  } catch (err) {
    next(err)
  }
})
