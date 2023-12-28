let obj1={1:"a",2:"b"}
let obj2={5:"a",5:"b"}
let obj3={4:"a",3:"b"}
// let obj4 = Object.assign({},obj1,obj3,obj2)//asiign object 
 let obj4 = {...obj1,...obj2,...obj3}//using spread
const hello = {
    id:"sonu",
    email:"ahfbabs@gmail.com",
    sex:"male",
    Id:214543
}
// console.log(Object.keys(hello));//print the datatypes
// console.log(Object.values(hello));//print the values
// console.log(Object.entries(hello));//print the the array singely
// console.log(obj4);
// console.log(hello.hasOwnProperty('sex'));//used to find the datatypes
const {email:es} = hello
console.log(es);
// {
//     "email"="asjbdkbasid@gmial",
//     "id":6546446
// }this are json files this can be in form of array also
// [
//     {}
// ]