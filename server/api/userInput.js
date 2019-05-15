const router = require('express').Router()

module.exports = router

router.post('/:method', (req, res, next) => {
  try {
    req.session[req.params.method] = req.body.info
    console.log('req.session', req.session)
    res.send(req.session[req.params.method])
  } catch (err) {
    next(err)
  }
})
