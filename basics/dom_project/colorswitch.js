const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(change){
    console.log(change);
    change.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
          case "grey":
              body.style.backgroundColor = e.target.id
              break;
          case "purple":
              body.style.backgroundColor = e.target.id
              break;
          case "yellow":
              body.style.backgroundColor = e.target.id
              break;
          case "blue":
              body.style.backgroundColor = e.target.id
              break;
         
          default:
              break;
         
         }
    });
});