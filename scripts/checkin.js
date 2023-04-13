const smileys = document.querySelectorAll(".smiley");

for (let i = 0; i < smileys.length; i++){
    const otherSmileys = Array.from(smileys).filter((el, j) => j !== i);
    smileys[i].addEventListener("click", () => {
        smileys[i].classList.remove("inactive-smiley");
        otherSmileys.forEach((el) => {
            el.classList.add("inactive-smiley");
          });
        handleCheckInClick(i+1);
    });
}


let lastClicked = 0;
function handleCheckInClick(smileyClicked){
    const resultContainer = document.getElementById("check-in-result");
    const resultContent = document.getElementById("check-in-content");
    let returnContent = "";

    if (smileyClicked === 1 && lastClicked !== 1){
        lastClicked = 1;
        returnContent = 
        `<p>Du er trist :(</p>
        <p>Det er trist.</p>`
    } else if (smileyClicked === 2 && lastClicked !== 2){
        lastClicked = 2;
        returnContent = 
        `<p>Du er lidt meh i dag :I</p>`
    } else if (smileyClicked === 3 && lastClicked !== 3){
        lastClicked = 3;
        returnContent = 
        `<p>Forskning viser, at et afslappet humør gør os i stand til at lære bedre, da opmærksomheden skærpes.
        Overvej at udnytte dit gode humør til at få mere ud af et mini-kursus.</p>
        <a href="#">Lad os gøre det</a>`
    } else if (smileyClicked === 4 && lastClicked !== 4){
        lastClicked = 4;
        returnContent = 
        `<p>Du er kæmpe glad! :D</p>`
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

