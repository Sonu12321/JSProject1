const a = "ssdjsd"
if(a) console.log("es");
else console.log("s");
//flasey values ar 0,false,bigint 0n,nun,undefined,"",nan(not a number)
//thruthy values "0",anything written in " "is a truthy value,{},[],function (){}
const b=[]
if(b.length===0) console.log("A");
else console.log("sd");//same way for object
function d (){}
if(d.length===0) console.log("A");
const s = {}
if(Object.keys(d).length===0) console.log("SS");//checking object is empty or not
//nulishing colescing operator(??):null or udefined
let val1;
// val1 = 10??5;//5
val1 =null??3//3used in firebase sothat we can get easily everything 
console.log(val1);
//terniary operator 
//syntax = condition ? true:false
const ice =23;
(ice>10) ? console.log("yes"):console.log("no");