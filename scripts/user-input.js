const form = document.querySelector('form');
const nameInput = document.getElementById('username');

// Udfør når der bliver trykket opret
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Sæt brugerens navn
    let username = nameInput.value;
    
    // Put navnet i localStorage til senere brug
    localStorage.setItem('username', username);
    
    // Før brugeren videre til checkin.html siden
    window.location.href = 'pages/checkin.html';
});
