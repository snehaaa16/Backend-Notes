// function buyProduct(product_name,cb/*callback*/){
//     //do something asynchronous operation 
//     setTimeout(()=>{
//         //all the operations completed
//         console.log("all the I/O operations is completed and order details are written in data")
//         cb();
//     },0)
// }

// buyProduct("Ihpne 16",function(){
//     console.log("product is purchased")
// })

// let product=[{
//     name:"samsung",
//     amount:7000,
//     quantity:10
// },
// {
//     name:"iphone16",
//     amount:10000,
//     quantity:0
// }]
// function buyProduct(product_name,cb){
//     //do something asynchronous operation
//     let isProduct= product.filter((p)=> p.name==product_name)[0];
//     console.log(isProduct);
// }
// buyProduct("iphone16",function(){
//     console.log("product is purchased")
// })

let product=[{
    name:"samsung",
    amount:70000,
    quantity:10
},
{
    name:"iphone16",
    amount:100000,
    quantity:0
}]

function buyProduct(product_name,cb){
    ///do something asynchronous operation
    let isProduct= product.filter((p)=> p.name==product_name)[0];
    if(!isProduct){
        return cb("product is not available",null)
    }
    cb(null,isProduct.amount);
}

let available_amount=200000
function deductbankamount(amount,cb){
    //do some bank transactions 
    if(amount>available_amount){
        return cb("bank balance is low",null)
    }
    else{
        available_amount-=amount;
        console.log(available_amount);
        cb(null,"amount deducted")
    }
}

buyProduct("iphone16",function(err,amount){
    if(err) return console.log(err);
    console.log(amount);
    deductbankamount(amount,function(err,message){
        if(err) console.log(err)
            console.log(message);
    })
})

// const fs = require("fs");