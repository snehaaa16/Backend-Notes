const fs=require("fs");
let str="";

for(let i=2;i<process.argv.length;i++){                     //Method 1 of insertion of data in file by loop 
    str+=process.argv[i]+" ";
}
fs.writeFile("../assign.txt",str,function(err,data){
    if(err)return console.log(err)
        console.log("File created with given str");
})