// Lavet af clara

const dropdowns = document.querySelectorAll('.dropdown-wrapper');
let animationLength;

dropdowns.forEach((dd) => {
  const links = dd.querySelectorAll('.dropdown-list a');
  const arrow = dd.querySelector(".down-arrow")
  const span = dd.querySelector('span');
  
  dd.addEventListener('click', function() {
    this.classList.toggle('is-active');
    arrow.classList.toggle("is-active");
  });


  links.forEach((element) => {
    element.addEventListener('click', function(evt) {
      span.innerHTML = evt.currentTarget.textContent;
      animationLength = element.dataset.value;
    })
  })
})


// Lottie animation

if(document.querySelector("lottie-player")){
  let player = document.querySelector("lottie-player");
  let playBtn = document.querySelector(".play-animation");
  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    if (isPlaying === false){
      player.play();
      console.log("start")
      playBtn.textContent = "Stop";
      isPlaying = true;
      timeoutId = setTimeout(() => {
        player.pause();
        playBtn.textContent = "Start";
        isPlaying = false;
        timeoutId = null;
      }, animationLength * 1000 * 60); // Gang dataen med 1000 for at gå fra ms til sekunder. Gang med 60 for at gå til minutter.

    } else if (isPlaying === true) {
      player.pause();
      console.log("stop");
      playBtn.textContent = "Start";
      isPlaying = false;
      clearTimeout(timeoutId);
      timeoutId = null;
      
    }
  })
}