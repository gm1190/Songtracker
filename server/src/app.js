/**
 * Created by meghendra on 9/18/2017.
 */
console.log("Hello! iam server");

const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgon=require('morgan')

const app= express()
app.use(morgon('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status',(req,res) => {
    res.send({
        message:'hello world!'
    })

})

app.listen(process.env.PORT || 8082)
