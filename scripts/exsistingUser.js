if (localStorage.getItem("username") === null) {
    console.log("Intet username")
} else {
    console.log("Du har allerede en bruger")
    setTimeout(function() {
        window.location.href = "pages/checkin.html";
    }, 1800);
}