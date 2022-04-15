const cors = require('cors')
const axios = require('axios')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  const { data } = await axios(
    'https://api.github.com/users/WellingtonOkabayashi/repos'
  )
  //console.log(data)

  return res.json({ data })
})

app.listen('3110')
