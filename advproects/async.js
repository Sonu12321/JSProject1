// async function getalluser(){
//     try {
//         const me = await fetch('https://api.github.com/users/hiteshchoudhary')
//         console.log(me);
//         const response = await me.json
//         console.log(me)    
//     } catch (error) {
//         console.log("errpr",error);
//     }
    
// }
// getalluser()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})