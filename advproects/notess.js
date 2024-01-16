const user = {
    username:"asdsad",
    email:"asdasdas",
    Idno:4545444,
    getuserdetails:function(){
        console.log(`username :${this.usernamer}`);
    }
    
}
console.log(user);
function userr(username,email,Idno) {
    this.username = username;
    this.email = email;
    this,Idno = Idno;

    return this//it is implicit
}//new key word is use to create a perfect instance
const userone = userr("hitesj","asjdasd@gmail.com",45)
console.log(userone);