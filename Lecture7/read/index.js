// let users=[
//     {
//         name:"sneha",
//         age:"20",
//         address:"Ambala"
//     },
//         {
//         name:"vanshika",
//         age:"21",
//         address:"Ambala Cantt"
//     }
// ]
const fs=require("fs");
const {read}=require("../IOoperation/util")

// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err)
//     // console.log(data);
//     let users = JSON.parse(data);
//     console.log(users[0].name)
// })

async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../users.txt")
