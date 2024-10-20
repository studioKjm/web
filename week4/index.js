const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
    res.send('hello world!')
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    
    if(name=="dog"){
        res.json({'sound':'멍멍'})
    } else if(name=="cat"){
        res.json({'sound':'야옹'})
    } else{
        res.json({'sound':'알수없음'})
    }
    
})

app.get('/cat', function (req, res) {
    res.send('고양이')
})

app.listen(3000)