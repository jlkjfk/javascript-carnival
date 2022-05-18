// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

document.getElementById('uni0').onclick = clicked
document.getElementById('uni1').onclick = clicked
document.getElementById('uni2').onclick = clicked

// var inflationLevel0 = 0
// var inflationLevel1 = 0
// var inflationLevel2 = 0
//--> here's a better way:
var inflation = [0, 0, 0]

//creat an onclick function that will change unicorn images
function clicked(event) {
  var unicorn = event.target //create a variable for the clicked cell so I can do stuff with it
  var id = unicorn.id[3]
  //**IMPORTANT: [3]means the third item (count from zero) in the 'ID'element, which is the number "0,1,2,3" */

  inflation[id]++ //a loop that makes inflationLevel goes up from 0

  //if the inflationLevel is full, we want it go back to zero
  if (inflation[id] == 4) inflation[id] = 0

  //Set the src property to the new image URL
  //***** the inflationLevel goes up from 0,because of "inflationLevel0++"
  unicorn.src = './images/unicorn-' + inflation[id] + '.png' //** REMEMBER how to create this **/
}
alert('THANK YOU from the unicorn')
