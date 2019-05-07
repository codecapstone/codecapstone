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

//getting a single challenge
router.get('/:challengeId', async (req, res, next) => {
  try {
    const oneChallenge = await Challenge.findByPk(req.params.challengeId)
    res.json(oneChallenge)
  } catch (err) {
    next(err)
  }
})

//getting

//posting a challenge

router.post('/', async (req, res, next) => {
  try {
    console.log('example in the challenge api', req.body)
    const newChallenge = await Challenge.create(req.body)
    res.send(newChallenge)
  } catch (err) {
    next(err)
  }
})
