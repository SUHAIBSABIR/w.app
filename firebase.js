import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'
// import { initializeApp } from "firebase/cdn";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjIBTBwRnkugJCp0j3j7uNw0e-eAmncis",
    authDomain: "practice-23371.firebaseapp.com",
    projectId: "practice-23371",
    storageBucket: "practice-23371.appspot.com",
    messagingSenderId: "553626453337",
    appId: "1:553626453337:web:f431197c85bd1f7e7ab848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {
    auth,
    createUserWithEmailAndPassword
}