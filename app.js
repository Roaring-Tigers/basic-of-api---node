import express from "express";
import cors from "cors";
const app = express()
const PORT = 5000



app.use(express.json()) // middleware

app.use(cors()) // middleware

app.get("/hello" , (req, res)=>{
     res.json({message: "Hello World"})
})

app.post("/sum" , (req, res)=>{
    console.log("input",req.body)
    const {num1,num2} = req.body
    const sum = +num1 + +num2
    res.json({message: "Sum is " + sum})


})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})


//localhost:5000/hello