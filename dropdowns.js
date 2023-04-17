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

const dropDownArrow = document.querySelectorAll('.down-arrow');
const dropDownContents = document.querySelector('.dropdown-contents');


function rotateArrow(index) {
  dropDownArrow.forEach((arrows) => {
    arrows.classList.remove('dropdownrotate');
  });
  dropDownArrow[index].classList.add('dropdownrotate');
  dropDownContents.classList.add('showdropdown');
  document.addEventListener('click', function(event){
    let isArrowClicked = dropDownArrow[index].contains(event.target);
    let isMenuClicked = dropDownContents.contains(event.target);
    if (!isArrowClicked && !isMenuClicked){
      dropDownArrow[index].classList.remove('dropdownrotate');
      dropDownContents.classList.remove('showdropdown');
    }
  });
}

