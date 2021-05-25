const middleware =require( './server/MiddleWare')
const express = require('express')
const controller  =require('./Controller')

   
const app = express()
app.use(middleware.authorization.headerAuth)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/user',controller.userRouter)
app.use(middleware.error.error);
 //TODO Add middleware for express

const port=process.env.PORT || 3000

var servr =app.listen(port,()=>console.log("server start ")).on('error', (e) => {
    console.log('Error happened: ', e.message)
 });;


module.exports=servr;