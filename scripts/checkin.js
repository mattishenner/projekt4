function handleCheckInClick(smileyClicked){
    let returnContent = ``;
    if (smileyClicked === 1){
        // Do something for sad
        returnContent = 
        `<p>Du er trist :(</p>`
    } else if (smileyClicked === 2){
        // Do something for meh
        returnContent = 
        `<p>Du er lidt meh i dag :I</p>`
    } else if (smileyClicked === 3){
        // Do something for glad
        returnContent = 
        `<p>Du er ret glad :)</p>`
    } else if (smileyClicked === 4){
        // Do something for happy
        returnContent = 
        `<p>Du er kæmpe glad! :D</p>`
    }
    return returnContent;
}