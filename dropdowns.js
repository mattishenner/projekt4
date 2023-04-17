// const dropDownArrow = document.querySelectorAll('.down-arrow');
// console.log(dropDownArrow);

// function rotateArrow(){
//     dropDownArrow.classList.add('dropdownrotate');
//     document.addEventListener('click', function(event){
//         let isArrowClicked = dropDownArrow.contains(event.target);
//         if (!isArrowClicked){
//             dropDownArrow.classList.remove('dropdownrotate');
//         }
//     });
// }

// const dropDownArrow = document.querySelectorAll('.down-arrow');
// const dropDownContents = document.querySelector('.dropdown-contents');


// function rotateArrow(index) {
//   dropDownArrow.forEach((arrows) => {
//     arrows.classList.remove('dropdownrotate');
//   });
//   dropDownArrow[index].classList.add('dropdownrotate');
//   dropDownContents.classList.add('showdropdown');
//   document.addEventListener('click', function(event){
//     let isArrowClicked = dropDownArrow[index].contains(event.target);
//     let isMenuClicked = dropDownContents.contains(event.target);
//     if (!isArrowClicked && !isMenuClicked){
//       dropDownArrow[index].classList.remove('dropdownrotate');
//       dropDownContents.classList.remove('showdropdown');
//     }
//   });
// }


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
      console.log(animationLength);
    })
  })
})


// Lottie animation
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