export function getGreeting() {
    let today = new Date();
    let time = today.getHours()
    let greeting;
    if (time < 6){
        greeting = "Godnat"
    } else if (time >= 6 && time < 9){
        greeting = "Godmorgen"
    } else if (time >= 9 && time < 12){
        greeting = "God formiddag"
    } else if (time >= 12 && time < 15){
        greeting = "Hej"
    } else if (time >= 15 && time <= 17){
        greeting = "God eftermiddag"
    } else if (time >= 18){
        greeting = "Godaften"
    }
    return greeting;
}
