// Lavet af Sarah

const newTaskInput = document.getElementById("new-task-input");
const highImportanceList = document.getElementById("high-importance");
const mediumImportanceList = document.getElementById("medium-importance");
const lowImportanceList = document.getElementById("low-importance");
const highPriorityRadio = document.getElementById("radio-high-priority");
const mediumPriorityRadio = document.getElementById("radio-medium-priority");
const lowPriorityRadio = document.getElementById("radio-low-priority");


// Denne funktion tilføjer opgaver til to-do-listen. 
function addTask(){
    // Først tjekker funktionen om værdien i input-feltet "newTaskInput" er tomt. 
    if(newTaskInput.value !== ''){
        // Hvis feltet har en værdi (og dermed ikke er tomt), opretter funktionen et li-element med "newTaskInput"-feltets værdi. 
        let li = document.createElement("li");
        li.innerHTML = newTaskInput.value;

        // Bagefter tjekker funktionen hvilken af radioknapperne, der er valgt. 
        if (highPriorityRadio.checked){
            // En anden funktion kaldes, der tjekker om der er under to liste-elementer tilføjet til den angivne liste.
            if (checkAmountOfTasks(highImportanceList) < 2){
                // Funktionen vil tilføje opgaven til en af de tre lister ("highImportanceList", "mediumImportanceList" og "lowImportanceList"), afhængig af hvilken radioknap man har valgt. 
                highImportanceList.appendChild(li);
            // Funktionen vil give en advarsel (alert), hvis brugeren prøver at tilføje mere end 2 opgaver per kategori ad gangen. 
            } else {window.alert("Det er ikke godt for dig, at have så travlt. Derfor kan du kun tilføje to opgaver pr kategori ad gangen.")}
            
        } else if (mediumPriorityRadio.checked){
            if (checkAmountOfTasks(mediumImportanceList) < 2){
                mediumImportanceList.appendChild(li);
            } else {window.alert("Det er ikke godt for dig, at have så travlt. Derfor kan du kun tilføje to opgaver pr kategori ad gangen.")}
            
        } else if (lowPriorityRadio.checked){
            if (checkAmountOfTasks(lowImportanceList) < 2){
                lowImportanceList.appendChild(li);
            } else {window.alert("Det er ikke godt for dig, at have så travlt. Derfor kan du kun tilføje to opgaver pr kategori ad gangen.")}
            
        }

        // Funktionen opretter til slut et span-element, i form af et x, hvor brugeren kan fjerne opgaven.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // X-knappen vises sammen med den tilføjede opgave.
        li.appendChild(span);
    }
    else{
        // Hvis input-feltet er tomt, gives en advarsel til brugeren via en "alert".
        alert("Hov! Du glemte at skrive opgaven");
    }
    // Herefter nulstilles input-feltet til en tom værdi.
    newTaskInput.value = "";
    // De indtastede opgaver til gemmes i browseren via Local Storage, så brugeren kan forlade to-do-listen, men ikke mister de tilføjede opgaver. Refererer til en funktion, der er defineret længere nede.
    saveData();
}


// Her tilføjes eventlisteners til de tre to-do-list kategorier. 
highImportanceList.addEventListener("click", handleClick);
mediumImportanceList.addEventListener("click", handleClick);
lowImportanceList.addEventListener("click", handleClick);


function handleClick(e) {
    // Funktionen tjekker, om det der klikkes på, er et liste-element (li).
    if(e.target.tagName === "LI"){
        // Hvis det ER et liste-element, enten tilføjes eller fjernes class'en "checked" på det element.
        e.target.classList.toggle("checked");
        // De indtastede data gemmes i Local Storage. Refererer til en funktion, der er defineret længere nede.
        saveData();
    }
    // Funktionen tjekker, om det der klikkes på, er et span-element.
    else if(e.target.tagName === "SPAN"){
        // Hvis det er et span-element, fjernes opgaven fra listen.
        e.target.parentElement.remove();
        // De indtastede data gemmes i Local Storage. Refererer til en funktion, der er defineret længere nede.
        saveData();
    }
}

function saveData(){
    // Denne funktion bruges til at gemme data i Local Storage. De omtalte data er indholdet af de tre lister og de gemmes vha. localStorage-egenskaben.
    localStorage.setItem("highImportanceData", highImportanceList.innerHTML);
    localStorage.setItem("mediumImportanceData", mediumImportanceList.innerHTML);
    localStorage.setItem("lowImportanceData", lowImportanceList.innerHTML);
}

function showTask(){
    // Funktionen viser de gemte data i listerne. Den går ind og henter de gemte data fra Local Storage og indsætter den data i de rigtige lister.
    highImportanceList.innerHTML = localStorage.getItem("highImportanceData");
    mediumImportanceList.innerHTML = localStorage.getItem("mediumImportanceData");
    lowImportanceList.innerHTML = localStorage.getItem("lowImportanceData");
}

function checkAmountOfTasks(ul){
    // Denne funktion tæller antallet af opgaver i en liste. Antallet af liste-elementer returneres som tal.
    const numberOfTasks = ul.getElementsByTagName("li").length;
    return numberOfTasks;
}

showTask();