import { auth, createUserWithEmailAndPassword } from "./firebase.js"

var email = document.getElementById("email")
var password = document.getElementById("password")
var btn = document.getElementById("btn")

var reg = () => {

    console.log(password.value)
    console.log(email.value)
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = ("userCredential.user");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

btn.addEventListener("click", reg)