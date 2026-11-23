//BACKEND RULES TO WRITE CODE

//STEP 1 : Import all the REQUIRED MODULES , Whatever is needed for my backend setup

//How to import moudles in Node js
//Syntax -   require('module-name') function can import module
//example -  require('express')

const express  =    require('express')

//Step 2 : Create Express function/Application  by using express() is alread a part of express module
// It help us to build API
                       
const app =   express()

//Middleware - Security Layer


//Step 3: Defined Routes , Path - API Endpoint for communication
//synatx:    app.methodName('path/adress', function(req,res){

//  })

app.get('/', function(req,res){
    res.send('Good Evening - Backend API Running and Healthy')
})

app.get('/login', (req,res)=>{
    res.send('Good eve , Please Login To Proceed')
})

app.get('/ressgiter',(req,res)=>{
    res.send('Good even Please resgiter')
})

//STEP 4: Start the Backend Server By using app.listen()
//Synatx  app.listen(portNumber ,function(){ } )

//PortNumber : It is number which help us to idenitfy the backend server in network
//Example   : 3000,5000,8000,9000 

app.listen(3000, ()=>{
 console.log('Backend Server Running on port http://localhost:3000')
})

