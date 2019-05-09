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

router.put('/:id', async (req, res, next) => {
  try {
    await UserStats.update({
      where: {
        completed: req.body.completed
      }
    })
    res.sendStatus(202)
  } catch (err) {
    next(err)
  }
})
