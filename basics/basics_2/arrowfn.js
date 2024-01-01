// const username = {
//     user:"Sonu Santhosh",
//     email:"sonu@gmail.com",
// //     id:5464,
//     welcome: function(){
//         //console.log(`${this},hello`);
        
//     }
// }
// username.welcome();
// username.user="sam";//we can only call arrowsa in objects not in function
// username.welcome();//the reason we cannot use this in arrow are during early days we use to work in javascript on engine now not
// console.log(this);
// const sonu =() => {
//     let usernasme="sons"
//     console.log(this);
// }in normal function arrow returns undefined but in refular fnction it defines {}
const two =(num1,num2) => {
    return num1 + num2;
}
//one way to return another way is
const three = (num1,num2) =>num1+num2;
console.log(three(6,5));
(function holy () {
    let usernasmes="osss"
    console.log(usernasmes);//iife and if we write two iife we need to put semicolonin first one 
})();
(  ()=>{
    console.log("hi");
})()

