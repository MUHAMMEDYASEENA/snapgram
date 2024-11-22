
const express=require('express')
let app=express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('contents'))
app.use(express.urlencoded())

let {connectDb} = require('./config/database')
connectDb()

const {getLoginPage,getSignupPage, signup, login} = require('./controllers/user')

app.get('/login', getLoginPage)
app.post('/login',login)
app.get('/signup',getSignupPage)
app.post('/signup',signup)


app.listen(8000,()=>{
    console.log("app started")
})