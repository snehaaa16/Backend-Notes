const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
    console.log("hello");       
    res.send("Hello from /");   
});


app.post("/watch/users", (req, res) => {
    let name=req.body.name;
    let password=req.body.password;
    const userData={
        name: name,
        password: password
    };

    fs.appendFile("file1.json",JSON.stringify(userData)+ "\n",(err)=>{
        if(err) return res.send("error reading file");
        else res.send("file created successfully");
    })
    // res.json({
    //     name:name,
    //     password
    // })
    // res.send("yo");      
    // console.log(req.body); // body mai post ka data hota hai (json form mai hota hai )       
});

app.listen(4444, function () {
    console.log("Server instantiated on port 4444");
});





