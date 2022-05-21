// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//get a cell by Tag
var cells = document.getElementsByTagName('TD')
//google "JS how to get random integer"
var randomIndex = Math.floor(Math.random() * cells.length)
//var randomIndex = Math.random() * cells.length==>this will return decimal numbers,not what we want

//get a rondom cell
var randomCell = cells[randomIndex]
console.log(randomCell)

//make the mole image appears in the random cell
//-by google "create html image in javascript"
var img = document.createElement('img')
img.src = './mole.PNG'
//* appendChild(A)means put A into the stuff before"."
randomCell.appendChild(img)
//the image was too big, google "JS how to adjust image size"
img.height = 75
img.width = 75

//whack the mole (make onlick function for the mole image to appear in random cell)
img.onclick = whackedMole

function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(img)
  //javascript audio file
  var audio = new Audio('./whack-audio.wav')
  audio.play()
}
