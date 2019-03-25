// modules
const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

// Environment variables
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000
dotenv.load() // reading the .env file

// express middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/api/data', require('./routes/betApiRoute'))
app.use('/api/user', require('./routes/userRoutes'))

app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})