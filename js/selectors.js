// declare your functions here...
function paragraphSelector() {
  var allPs = document.querySelectorAll('p');
  
  return allPs
  
}

function lastImageSelector() {
  let lastImg = $('img:last');
  
  return lastImg
}

function ninjaBabySelector() {
  let ninjaBaby = document.getElementById('baby-ninja');
  let ninjaBabyImage = $('img#baby-ninja:image');
  return ninjaBabyImage
}

function divSelector() {
  let divPics = document.querySelectorAll('div.pics');
  return divPics
}

function firstListItem () {
  let firstList = document.querySelector('ul#pic-list:first-child');
  return firstList
}