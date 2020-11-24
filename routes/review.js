// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.reviews.index)
// router.get('/:id', ctrl.reviews.show)

// exports
module.exports = router