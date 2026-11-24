//Step 1 : import modules
const express =      require('express')
const cors   =       require('cors')
const mongoose=     require('mongoose')
const bcrypt =     require('bcrypt')
const { emit } = require('node:cluster')
const { type } = require('node:os')

//Step 2 : Create express appl
              
const app  =   express()

//Middleware - Security
app.use(express.json())
app.use(cors())  //Enable the cors so we can share resouce even though having diffrent port Number



//BACKEND AND DATABASE CONNECTION

//1. Connect - LocalDB - mongodb:localhost:27017/DatabaseName

mongoose.connect('mongodb://localhost:27107/OctBactStudentdb')

.then(()=>console.log("Mongodb Connected"))
.catch((err)=>console.log(err))

//2.Schema - Blueprint of dta which we want to store
 const UserSchema  =   new  mongoose.Schema({
                    //key:value
                    name:String,
                    email:{
                        type:String,
                        unqiue:true
                    },
                    password:String
                 })
//3. Model - Reperent Collection in MongoDB
    const User =   mongoose.model('User',UserSchema)

//Step 3 - API
app.get('/',(req,res)=>{
    res.json(
        {xyz:'Api Running Backend Heathly'}
    )
})

//Resgiter-SING UP


//LOGIN - SIGN IN



app.post('/login',(req,res)=>{

//Data From Frontend - req.body

   const {name , email} = req.body

   console.log(name)

   //Simple Validation
   if(name && email){
             
        res.json({
            message:`Welcome ${name} To My Website`
        })

   }else{
      res.json({
            message:`Email and Name are required`
        })
   }



})


//Step 4 
app.listen(3000,()=>{
    console.log('Backend Running http://localhost:3000')
})