let users=[
    {
        name:"sneha",
        age:"20",
        address:"Ambala"
    },
        {
        name:"vanshika",
        age:"21",
        address:"Ambala Cantt"
    }
]
const fs=require("fs");
// fs.writeFile("../users.txt",users.toString(),function(err){
//     if(err) return console.log(err);
//     console.log("users written");
// })

fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err)
    console.log("users written")
})