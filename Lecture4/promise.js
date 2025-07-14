// let p = new Promise((resolve,reject)=>{
//     resolve("wada pura kiya")
// })
// console.log(p);

// p.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
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

function buyProduct(product_name){
    return new Promise((resolve,reject)=>{
    let isProduct= product.filter((p)=> p.name==product_name)[0];
    if(!isProduct){
        reject("product is not available")
    }else{
        resolve(isProduct.amount);
    }
    })
}

buyProduct("iphone16")
    .then((amount) => {
        console.log("Product price is:", amount);
    }) 
    .catch((err) => {
        console.log("Error:", err);
    });
// function buyProduct(product_name,cb){
//     ///do something asynchronous operation
    // let isProduct= product.filter((p)=> p.name==product_name)[0];
    // if(!isProduct){
    //     return cb("product is not available",null)
    // }
//     cb(null,isProduct.amount);
// }