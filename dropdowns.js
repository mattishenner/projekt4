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
const dropDownContents = document.querySelectorAll('.dropdown-contents');


function rotateArrow(index) {
  dropDownArrow.forEach((arrows) => {
    arrows.classList.remove('dropdownrotate');
  });
  dropDownArrow[index].classList.add('dropdownrotate');
  document.addEventListener('click', function(event){
    let isArrowClicked = dropDownArrow[index].contains(event.target);
    if (!isArrowClicked){
      dropDownArrow[index].classList.remove('dropdownrotate');
    }
  });
  dropDownMenu();
}

function dropDownMenu(){
  dropDownContents.classList.add('showdropdown');
}