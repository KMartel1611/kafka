const express = require('express')
const { writeUserDataToKafka, readMessages } = require('./user.kafka')

const app = express()
const port = 3001

readMessages()

app.get('/send-messaje',async (req, res) => {
   // await writeUserDataToKafka({ email: 'example', isNew: false, message: null })

    res.send('hello world')
  })

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`)})