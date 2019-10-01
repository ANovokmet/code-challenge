const express = require('express')
const app = express()
const port = 3000

const login = require('./login')

app.use(express.json())

app.post('/login', login)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))