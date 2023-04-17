// Få fat i form elementet
const form = document.querySelector('form');

// Tilføjer en eventListener til når når bliver trykket opret
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Få brugerens navn
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    
    // Put navnet i localStorage til senere brug
    localStorage.setItem('name', name);
    
    // Før brugeren videre til checkin.html siden
    window.location.href = 'pages/checkin.html';
});