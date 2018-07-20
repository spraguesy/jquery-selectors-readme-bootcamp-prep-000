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
  return ninjaBaby
}

function divSelector() {
  let divPics = document.querSelectorAll('div.pics');
  return divPics
}

function firstListItem () {
  firstList = document.querySelector('ul#piclist:first-child');
  return firstList
}