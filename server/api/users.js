const router = require('express').Router()
const {User} = require('../db/models')
const {Challenge} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const update = await User.update(
      {
        isAdmin: true
      },
      {
        where: {email: req.body.email},
        returning: true,
        plain: true
      }
    )
    res.send(update)
  } catch (err) {
    next(err)
  }
})
