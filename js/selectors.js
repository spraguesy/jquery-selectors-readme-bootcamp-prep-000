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
  return document.querSelectorAll('div.pics');
}

function firstListItem () {
  return document.querySelector('ul#piclist:first-child');
}