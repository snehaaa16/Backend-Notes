let users=[
    {
        name:"sneha",
        age:21,
        address:"Ambala"
    },
    {
        name:"vanshika",
        age:20,
        address:"Pinjore"
    }
]

let people=[
    {
        name:"keshav",
        age:20,
        course:"cse"
    },
    {
        name:"vamika",
        age:20,
        course:"cse"
    }
]

const fs = require("fs");
fs.writeFile("../file1.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("file1 created successfully!!");
})
fs.writeFile("../file2.txt",JSON.stringify(people),function(err){
    if(err) return console.log(err);
    console.log("file2 created successfully!!");
})

fs.readFile("../file1.txt", "utf-8", function (err, data) {
    if (err) return console.log(err);

    let file1 = JSON.parse(data);

    fs.readFile("../file2.txt", "utf-8", function (err, data1) {
        if (err) return console.log(err);

        let file2 = JSON.parse(data1);
        let newarr = [...file1, ...file2];

        fs.writeFile("../result.txt", JSON.stringify(newarr), function (err) {
            if (err) return console.log(err)
            console.log("users written")
        })
    })
})