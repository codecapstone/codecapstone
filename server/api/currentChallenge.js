const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.json(req.session.selectedProblem)
  } catch (err) {
    next(err)
  }
})
