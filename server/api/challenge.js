const router = require('express').Router()
const {Challenge} = require('../db/models')
module.exports = router

//getting all challenges
router.get('/', async (req, res, next) => {
  try {
    const allChallenges = await Challenge.findAll()
    res.json(allChallenges)
  } catch (err) {
    next(err)
  }
})

//getting a challenge based on the level
router.get('/level/:level', async (req, res, next) => {
  try {
    const challenges = await Challenge.findByLevel(req.params.level)
    res.json(challenges)
  } catch (err) {
    next(err)
  }
})

//getting a single challenge
router.get('/:challengeId', async (req, res, next) => {
  try {
    const oneChallenge = await Challenge.findByPk(req.params.challengeId)

    req.session.selectedProblem = oneChallenge

    res.json(oneChallenge)
  } catch (err) {
    next(err)
  }
})

//getting a challenge based on the topic
router.get('/topic/:topicId', async (req, res, next) => {
  try {
    const challenges = await Challenge.findByTopic(req.params.topicId)
    res.json(challenges)
  } catch (err) {
    next(err)
  }
})

//posting a challenge

router.post('/', async (req, res, next) => {
  try {
    const newChallenge = await Challenge.create(req.body)
    res.send(newChallenge)
  } catch (err) {
    next(err)
  }
})
