const router = require('express').Router()
// const Projects = require('../models/projects-model.js')

router.get('/test', (req, res) => {
    res.status(200).json({message: 'test router is working'})
})
module.exports = router