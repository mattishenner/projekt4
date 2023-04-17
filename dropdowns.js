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
    })
  })
})
