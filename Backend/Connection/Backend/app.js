//Step 1 : import modules
const express =      require('express')
const cors   =       require('cors')

//Step 2 : Create express appl
              
const app  =   express()

//Middleware - Security
app.use(express.json())
app.use(cors())  //Enable the cors so we can share resouce even though having diffrent port Number


//Step 3 - API
app.get('/',(req,res)=>{
    res.json(
        {xyz:'Api Running Backend Heathly'}
    )
})


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