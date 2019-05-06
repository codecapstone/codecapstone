// const router = require('express').Router()
const {WebhookClient} = require('dialogflow-fulfillment')
const functions = require('firebase-functions')

//Create an instance

// module.exports = router

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({request, response})

    function example(agent) {
      const example1 = agent.parameters['example']

      if (example1) {
        agent.add(`Nice example!`)
      }
      agent.add('Tell me your example')
    }

    let intentMap = new Map()
    intentMap.set('example', example)
    agent.handleRequest(intentMap)
  }
)
// router.post('/', async (req, res, next) => {
//   try {
//     const agent = req.body
//     console.log('chatbot api', agent)
//     agent.add = {welcome: 'Blaaah'}
//     // exports.dialogflowFirebaseFullfilment = functions.https.onRequest(
//     //   (req, res) => {
//     //     const agent = new WebhookClient({request: request, response: response})
//     //     const addResp = agent => {
//     //       agent.add('BLAH BLAH BLAH')
//     //     }
//     //     agent.handleRequest(addResp)
//     //   }
//     // )

//     res.send(agent)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/', async (req, res, next) => {
//   try {
//     res.json('hello')
//   } catch (err) {
//     next(err)
//   }
// })
