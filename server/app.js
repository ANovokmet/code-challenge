const express = require('express')
const app = express()

const login = require('./login')
const encode = require('./encode')

const auth = require('./middleware/authorization')

app.use(express.json())

app.post('/login', login)
app.post('/encode', auth, encode)

module.exports = app