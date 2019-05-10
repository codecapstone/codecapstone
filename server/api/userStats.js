const router = require('express').Router()
const {UserStats} = require('../db/models')
const {Challenge} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userStats = await UserStats.findAll({
      where: {
        userId: req.user.id
      }
    })
    res.json(userStats)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('REQ BODY', req.body)
    const data = await UserStats.create(req.body)
    res.send(data).status(201)
  } catch (error) {
    console.error(error)
  }
})

router.put('/', async (req, res, next) => {
  console.log('REQ BODY', req.body)
  try {
    const existingChallenge = await UserStats.findOne({
      where: {
        userId: req.body.userId,
        challengeId: req.body.challengeId
      }
    })

    const markedDone = await UserStats.update(
      {
        isCompleted: req.body.isCompleted
      },
      {
        where: {
          userId: existingChallenge.userId,
          challengeId: existingChallenge.challengeId
        }
      }
    )

    res.sendStatus(202)
  } catch (err) {
    next(err)
  }
})
