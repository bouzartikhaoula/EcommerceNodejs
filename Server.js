const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config({path:'config.env'})


app.get('/test',(req,res)=>{

    res.send('hi2')
})


const PORT=process.env.PORT || 8000
// app.listen(8000,()=>{
 app.listen(PORT,()=>{ 
    console.log(`app ranning ${PORT}`);
})