var a=3;//its local scope
if(true){//its block scope
    let c=30;
    const b=20;
    var another = 23;
}
//console.log(a);
function one (num){
    return num +1;
}
one(2)//we have to host this function anywhere as we have declared it  not in a variable
const two = function(num){
    return num +2;
}
two(5) //we have to host this function here as we have declared it in a variable 
