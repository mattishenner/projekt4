// Få brugerens navn fra localStorage
const name = localStorage.getItem('name');

// Sæt teksten ind i span elementet
document.getElementById('name').textContent = name;