import { getGreeting } from "./scripts/time.js";

const greetingText = document.getElementById("greeting");

greetingText.innerHTML = `${getGreeting()} Polle`