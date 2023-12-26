const a = "sonugflp"
const b = " hello"

console.log(`hi my name is ${a} and i am saying ${b}`) //==>  ` `this is used to concat
const c = new String(`Sonu`)
console.log(a.toUpperCase())
console.log(a.charAt(2))
console.log(a.indexOf("s"))
const n = a.substring(0,5);
console.log(n);
const d = a.slice(-8,4);
console.log(d);
const t ="        sonu        ";
console.log(t.trim())//used to avoid space in the given string
const url = "http://himon@66.com"
console.log(url)
console.log(url.replace('@66','55'))// used to replace
console.log(url.includes("66"));//to check whether the the give thing is present or not
const r = "gbfdh kagf kahbfkkad aafdj"
console.log(r.split(' '));//to gert string to array 
console.log(c.small());