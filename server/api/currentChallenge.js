const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    if (req.session.selectedProblem) {
      res.json(req.session.selectedProblem)
    } else {
      res.send('none')
    }
  } catch (err) {
    next(err)
  }
})
