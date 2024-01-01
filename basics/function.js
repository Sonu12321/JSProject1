// function hello (){
//     console.log("hi");
// }
// hello()
function addtwonumbers(number1,number2) {
    // let result = number1 + number2
    // return result//after using return u cannot do print 
    return number1 + number2
}
const result = addtwonumbers(1,3)//for using both the techniques we have to create a variable to store the return value
// console.log(result);
function checkifnameiscall(user="sam"){//another way of declaring function and caLLing function using it to print
    if(!user){
        console.log("print he name");
        return
    }
    return` ${user} is my name`
}
// console.log(checkifnameiscall());

function shoppingcart(...num1) {//use in while creating a cart
    return num1
}
// console.log(shoppingcart(200,300,4000));
const user ={
    username:"sonu",
    id:146
}
function callingobject(getme) {
    console.log(`my name is ${getme.username} and my id is ${getme.id}`)
    
}
// console.log(callingobject(user));//
callingobject({
    username:"Sonu",
    id:146
})//using object
//suing array
const myarray = [200,300,355,455]
function calling_array(array){
    console.log(array[1]);
}
console.log(calling_array(myarray));