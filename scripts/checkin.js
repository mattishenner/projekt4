const smileys = document.querySelectorAll(".smiley");


//Loop gennem alle smileys i dokumentet
for (let i = 0; i < smileys.length; i++) {
    // Lav en array som indeholder smileys bortset fra den i det nuværende loop
    const otherSmileys = Array.from(smileys).filter((el, j) => j !== i);

    // Tilføj en click event listener til den nuværende smiley
    smileys[i].addEventListener("click", () => {
        // Fjern inactive-smiley class hvis smileyen bliver klikket på
        smileys[i].classList.remove("inactive-smiley");

        //Sørg for at de andre smileyer, som vi jo nu har i en array, får tilføjet inactive-smiley class, med et foreach loop
        otherSmileys.forEach((el) => {
            el.classList.add("inactive-smiley");
        });

        // Kald handleCheckInClick funktionen med den nuværende smileys index plus 1 (for mere læselig kode i handleCheckInClick funktionen)
        handleCheckInClick(i + 1);
    });
}

//vi laver en lastClicked variabel, for at vi kan gøre noget andet hvis man trykker på den samme smiley to gange (da det jo så er for at trække sit checkin tilbage)
let lastClicked = 0;
function handleCheckInClick(smileyClicked){
    const resultContainer = document.getElementById("check-in-result");
    const resultContent = document.getElementById("check-in-content");
    let returnContent = "";

    if (smileyClicked === 1 && lastClicked !== 1){
        lastClicked = 1;
        returnContent = 
        `<p><b>Let’s turn that frown upside down!</b></p>
        <p>Det ser ud til, at du har brug for lidt ekstra fokus på dig selv i dag. Noget der hjælper på både stress og overvældende følelser, er vejrtrækningsøvelser. Skal vi ikke tjekke dem ud?</p>
        <a href="værktøjer/vejr.html">Lad os gøre det</a>`
    } else if (smileyClicked === 2 && lastClicked !== 2){
        lastClicked = 2;
        returnContent = 
        `<p><b>Alle dage, er ikke lige gode</b></p>
        <p>Nogle dage er humøret bare ikke i top - det er også helt okay. Det gør kontrasten til de gode dage større! Måske dit humør kunne blive bedre, af at lytte til noget afslappende musik?</p>
        <a href="værktøjer/musik.html">Lad os gøre det</a>`
    } else if (smileyClicked === 3 && lastClicked !== 3){
        lastClicked = 3;
        returnContent = 
        `<p><b>Gode dage skal man samle på!</b></p>
        <p>Overvej om du skal udnytte dit gode humør til at opdatere din prioriteringslisteliste, så du kan være på forkant med dagens opgaver. Et godt overblik over ting man skal nå, er altid godt til at skabe mentalt overskud.</p>
        <a href="værktøjer/todo.html">Lad os gøre det</a>`
    } else if (smileyClicked === 4 && lastClicked !== 4){
        lastClicked = 4;
        returnContent = 
        `<p><b>Dejligt at du har en god dag!</b></p>
        <p>Forskning viser, at et afslappet humør gør os i stand til at lære bedre, da opmærksomheden skærpes. Overvej at udnytte dit gode humør til at få mere ud af et mini-kursus.
        </p>
        <a href="kurser.html">Lad os gøre det</a>`
    } else {
        returnContent = "";
        lastClicked = 0;
        resultContent.innerHTML = returnContent;
        let height = 0;
        resultContainer.style.height = height + "px";
        smileys.forEach((smi) => {
            smi.classList.remove("inactive-smiley");
        });
        return;
    }
    resultContent.innerHTML = returnContent;
    let height = resultContent.scrollHeight + 30;
    resultContainer.style.height = height + "px";
}

