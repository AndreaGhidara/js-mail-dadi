
const btn = document.querySelector(".btn");
const textInput = document.querySelector(".input");
const txt = document.querySelector(".txt");


const userLogged = ["andrea@gmail.com", "luca@gmail.com", "giorgio@gmail.com", "marco@gmail.com", "kilua125@gmail.com"];

btn.addEventListener("click", function() {
    const email = document.querySelector("input").value;
    for (let i = 0; i < userLogged.length; i++) {
        const actualUser = userLogged[i];
        
        if ( actualUser == email ) {
            alert("bentornato");
        } 
        if ( actualUser != email ) {
            txt.innerHTML = "Hai sbagliato qualcosa, riprova";
            location.reload();
        }
        
    }
})
