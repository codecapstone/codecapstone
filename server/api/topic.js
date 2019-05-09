const router = require('express').Router()
const {Topic, Challenge} = require('../db/models')
module.exports = router

//gettting the list of all topics
router.get('/', async (req, res, next) => {
  try {
    const allTopics = await Topic.findAll()
    res.json(allTopics)
  } catch (err) {
    next(err)
  }
})

//getting a single topic with all challenges
router.get('/:topicId', async (req, res, next) => {
  try {
    const allTopics = await Topic.findByPk(req.params.topicId, {
      include:[{model: Challenge}]
    })
    res.json(allTopics)
  } catch (err) {
    next(err)
  }
})
