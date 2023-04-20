// Lavet af Mattis

import { getGreeting } from "./time.js";

if (document.getElementById("greeting")){
    const greetingText = document.getElementById("greeting");
    greetingText.innerHTML = `${getGreeting()} <span id="username"></span>`
    let username = localStorage.getItem('username');    
    document.getElementById('username').textContent = username;
}
