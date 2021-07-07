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

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/resources', (req, res) => {
    const newResource = req.body
    Projects.addResources(newResource)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
    const newProject = req.body
    Projects.addProjects(newProject)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/tasks', (req, res) => {
    const newTask = req.body

    Projects.addTasks(newTask)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

module.exports = router