//1 method 
// let users = [
//   { id: 1, name: "sneha", age: 24 },
//   { id: 2, name: "aman", age: 24 }
// ];

// function isAllowed(id) {
//   // id ka user dhundo
//   let user = users.find(u => u.id === id);
  
//   // agar user mila aur uski age > 18 hai to true return karo
//   if (user && user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAllowed(4));

//2nd method
let users = [
    {
        id:1,
        name:"sneha",
        age:24
    },
    {
        id:2,
        name:"aman",
        age:16
    }
]
/* sneha's function
function isAllowed(id){
    let flag = 0;
    for (let i of users)
    if(id===i.id ){
        if(i.age>18){
            console.log("adult");
            flag=1;
        }
        else{
            console.log("not adult");
            flag=1;
        }
    }
    if(flag==0){
    console.log("no such id present")
    }
}
isAllowed(2);
*/

/*sir's function
function isAllowed(id){
    let user = users.filter((u)=>{
        return u.id=id
    })[0]
    console.log(user);
    if(!user) return console.log("no user found")
    if(user.age<18) return console.log("Not eligible to vote")
    return console.log("eligible to vote")        
}
isAllowed(1)*/

// making it asyncronous
function isAllowed(id){
    return new Promise((resolve,reject)=>{
        let user = users.filter((u)=>{
        return u.id=id
    })[0]
    console.log(user);
    if(!user) return reject("no user found")
    if(user.age<18) return reject("Not eligible to vote")
    return resolve("eligible to vote") 
    })
}
isAllowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// let p=new Promise((resolve,reject)=>{
//      resolve("wada pura kiya")
// })
// // console.log(p);
// p.then((data)=>{
// console.log(data)
// })
// .catch((err)=>{
// console.log(err)
// })
let product=[{
    name:"samsung" ,
    amount:70000, 
    quantity:10
}
,
{
    name:"Iphone 16" ,
    amount:100000, 
    quantity:2
}]
function buyProductPromise(product_Name) {
    return new Promise((resolve, reject) => {
        let isProduct = product.filter((p) => p.name == product_Name)[0];
        
        if (!isProduct) {
            return reject("Product is not available");
        }

        resolve(isProduct.amount);
    });
}

//hw to execute deductedamount operation in promise 
let availableamount=200000
function deductbankamount(amount){
//do some transaction
return new Promise((resolve,reject)=>{
    if(amount>availableamount){
        return reject("bankbalance is low")
     
     }
     else{
        availableamount-=amount;
       
        resolve("amount deducted")
     //    cb(null,"amount deducted")
     }
})


}
//promise chaining-- to execute multiple promises in synchronous way
// buyProductPromise("Iphone 16").then((amount) => deductbankamount(amount))
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

async function domytask() {
    

try{
    let amount=await buyProductPromise("Iphone 16");
    let mes=await deductbankamount(amount);
    console.log(mes)
}
catch(error){
console.log(error)
}
}
domytask();
console.log("start")