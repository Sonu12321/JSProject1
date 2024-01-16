const x1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("heooolosodj");
        resolve()//to connect the the object as it is a thenable 
    },1000)
})
x1.then(function(){
    console.log("is promised");
})
//second type of resolve
const x2 = new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("help me");
    },1000)
    resolve()
}).then(function () {
    console.log("jhvjvf");
})
//third type of promise
const x3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"help",email:"chalbhaiu"})
    },1000)
})
x3.then(function(user){
    console.log(user);
})
// promsises four 
// const x4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username:"sonnu",email:"lhgaisdfvuj@gmial.com"})
//         }
//         else{
//             reject('find error')
//         }
//     },1000)
// })
// x4.then((user1)=>{
//     console.log(user1);
//     return user1.username
// }).then((username2)=>{
//     console.log(username2);
// }).catch((error)=>{
//     console.log(error);
// }).finally((error)=>{console.log("jasfkagfkdbgvkbskfdjk")})

const Promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"sonnu",email:"lhgaisdfvuj@gmial.com"})
        }
        else{
            reject('find error')
        }
    },1000)
})
async function comsumePromiseme(){
//    const x =  await promise5
//    console.log(x)
// }
// comsumepromise5()
try {
    const x =  await promise5
   console.log(x)
} catch (error) {
    console.log(error);
}
}
comsumePromiseme()