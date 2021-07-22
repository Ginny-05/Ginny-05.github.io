/* .js files add interaction to your website */

var factList = [
  "To lower the cultural significance of Shark Fin Soup, China is prohibiting the serving of shark fin soup at official banquets.",/*0*/
  "Shark fins have no nutritious value or taste.",/*1*/
  "There have been on average just 19 shark attacks each year and one shark-attack fatality every two years.",/*2*/
  "Sharks that are thrown back into the oceans after being finned, die from suffocation, blood loss or predation."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
