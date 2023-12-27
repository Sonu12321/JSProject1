// const myheros = [1,2,3,4]
// const arr2 = new Array(1,2,3,5,6)
// console.log(myheros);
// arr2.push(5)//pop removes last value and unshift used for adding values in first index
// console.log(arr2);
// arr2.shift()
// console.log(arr2.includes(1));
// const arr3 = arr2.join() it converts the array to string
// // console.log(arr3);
// const no1 = arr2.slice(1,3)
// console.log("a",no1);
// console.log(arr2)
// const no2 = arr2.splice(1,3)//include the element till we have mentioned and after that in array remove the mentioned values and print the array
// console.log(arr2)
// console.log("b",no2);
const marvel = [1,3,5,6,8]
const dc = [2,3,8,6,4]
// marvel.push(dc)
// console.log(marvel[5][2]);this method is not right
// const boys = dc.concat(marvel)
// console.log(boys);
// const boys2 = [...marvel,...dc]
// console.log(boys2)
const a = [2,,5,6,4,8,6,[54,5,6,6,4,7,7,[5,6,6,4,8]]]//makes the uneven array into a normal array 
console.log(a.flat(Infinity));
console.log(Array.isArray("sonu"))//use to check if it is an array
console.log(Array.from("sonu"));//used to convert the string into array
let e =5
let b =2
let c =1
console.log(Array.of(e,b,c));//used to store different variable in an array
