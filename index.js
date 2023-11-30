const express = require('express')
const app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 3000

app.use(cors())
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.json('Hai')
})

app.post('/login', (req, res) => {
    
    let username = 'luthfi'
    let password = '14082002'

    if (req.body.username === username) {
        if (req.body.password === password) {
            res.json({
                status: 'success'
            })
        }  else {
            res.json({
                status: 'password salah'
            })
        }
    } else {
        res.json({
            status: 'username tidak ditemukan'
        })
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})