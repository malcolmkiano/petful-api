const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan)
app.use(cors())

app.use('/people', require('../people/people.router'))
app.use('/pets', require('../pets/pets.router'))

module.exports = app
