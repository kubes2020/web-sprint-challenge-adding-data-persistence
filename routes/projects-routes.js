const router = require('express').Router()
const Projects = require('../models/projects-model.js')

// router.get('/test', (req, res) => {
//     res.status(200).json({message: 'test router is working'})
// })

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})


module.exports = router