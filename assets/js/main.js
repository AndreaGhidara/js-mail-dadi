const btn = document.querySelector("#btn");
const textInput = document.querySelector(".input");
const sendMail = document.getElementById("exampleInputEmail1");
const send = document.getElementById("send");


send.addEventListener("click", function() {
    let newMail = document.getElementById("exampleInputEmail1");
    newMail = newMail.value
    console.log(newMail);
    userLogged.push(newMail);
})

const userLogged = ["andrea@gmail.com", "luca@gmail.com", "giorgio@gmail.com", "marco@gmail.com", "kilua125@gmail.com"];

btn.addEventListener("click", function() {
    const email = document.querySelector(".input").value;
    let log = false;
    
    for (let i = 0; i < userLogged.length; i++) {
        const actualUser = userLogged[i];
        console.log(actualUser);
        
        if ( actualUser == email ) {
            log = true;
        }
    }
    if ( log == true ) {
        alert("Bentornato");
    } else {
        alert("hai sbagliato qualcosa riprova");
    }
})
