
const btn = document.querySelector(".btn");
const textInput = document.querySelector(".input");
const txt = document.querySelector(".txt");

let log = false;

const userLogged = ["andrea@gmail.com", "luca@gmail.com", "giorgio@gmail.com", "marco@gmail.com", "kilua125@gmail.com"];

btn.addEventListener("click", function() {
    const email = document.querySelector("input").value;
    for (let i = 0; i < userLogged.length; i++) {
        const actualUser = userLogged[i];
        console.log(actualUser);
        
        if ( actualUser == email ) {
            log = true;
        }
        


        if ( log == true ) {
            let testo = document.querySelector("h2");
            testo.innerText = "si";

        } else {
            let testo = document.querySelector("h2");
            testo.innerText = "no";

        }
    }
})
