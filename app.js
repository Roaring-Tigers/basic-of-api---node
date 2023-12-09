import express from "express";
import cors from "cors";
const app = express()
const PORT = 5000

app.use(express.json()) // middleware
app.use(cors()) // middleware




function hello(req, res){
     res.json({"message": "Hello World"})
}

app.get("/hello", hello)

// xyz.com/hello


function sumOf2(req, res){
    
    let num1 = req.body.num1
    let num2 = req.body.num2 

    let sum = +num1 + +num2
    res.json({"sum": sum})

}


app.post("/sum", sumOf2)

// xyz.com/sum





















app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})


//localhost:5000/hello