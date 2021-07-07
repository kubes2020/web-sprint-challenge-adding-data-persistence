const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const ProjectsRouter = require('./routes/projects-routes.js')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/projects', ProjectsRouter)

// server.get('/', (req, res) => {
//     res.send('endpoint is working!!!')
// })

module.exports = server