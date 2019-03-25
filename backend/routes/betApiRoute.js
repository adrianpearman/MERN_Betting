const express = require('express')
const router = express.Router()
const axios = require('axios')

const api_key = process.env.APIKEY

router.get('/current/sports', (req, res) => {
    // An api key is emailed to you when you sign up to a plan

    // Get a list of in season sports
    axios.get('https://api.the-odds-api.com/v3/sports', {
        params: {
            apiKey: api_key
        }
    }).then(data => {
        const remainingRequests = data.headers['x-requests-remaining']
        const information = {
            remainingRequests,
            ...data.data
        }
        res.json(information)
    })
    .catch(err => {
        const error = err.response.data
        res.json(error)
    })
})

router.post('/current/odds', (req, res) => {
    const region = req.body.region 
    const sport = req.body.sport || 'upcoming'
    const mkt = req.body.mkt || 'h2h'

    axios.get(`https://api.the-odds-api.com/v3/odds/`,{
        params:{
            apiKey: api_key,
            region: region,
            sport: sport,
            mkt: mkt
        }
    }).then((data) => {
        const remainingRequests = data.headers['x-requests-remaining']
        const information = {
            remainingRequests,
            ...data.data
        }
        res.json(information)
    })
    .catch(err => {
        const error = err.response.data
        res.json(error)
    })
})

module.exports = router