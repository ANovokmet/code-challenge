const express = require('express')
const app = express()

const login = require('./login')
const encode = require('./encode')
const codeChallenge = require('./routes/code-challenge')

const auth = require('./middleware/authorization')

app.use(express.json())

app.post('/login', login)
app.post('/encode', auth, encode)
app.use('/code-challenge', codeChallenge);

module.exports = app