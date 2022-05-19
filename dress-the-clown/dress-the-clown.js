// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//**SOLUTION 1

document.onkeydown = checkKey
// copied with google search "function with arrow keys JS"
function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1) //*headIndex0 means current choice, "-1"means turn left,"1"means turns right */
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}

var head = document.getElementById('head')
var body = document.getElementById('body')
var shoes = document.getElementById('shoes')
//put the above variables into an array (in order to use one function for all)
var imgs = [head, body, shoes]
//this array is created for "concat"method in "image src"part
var strings = ['head', 'body', 'shoes']

//same as "unicorn", convert “var headIndex =0,var bodyIndex =0,var shoesIndex =0"
var indexes = [0, 0, 0]
var mainIndex = 0

function changeHorizontal(shift) {
  var index = indexes[mainIndex]
  var image = imgs[mainIndex]
  var str = strings[mainIndex]
  index += shift

  //same as "unicorn"challenge,this creates a circle between 0-5
  if (index < 0) index = 5 //when lower than 0, go to 5
  if (index > 5) index = 0 //when higher than5, go back to 0

  indexes[mainIndex] = index
  image.src = './images/' + str + index + '.png'
}

//move from head to body to shoes
function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2 //when lower than 0, go to 2
  if (mainIndex > 2) mainIndex = 0 //when higher than2, go back to 0
}

//**Solution2, learn this later */

// const headImg = document.getElementById('head')
// const bodyImg = document.getElementById('body')
// const shoesImg = document.getElementById('shoes')

// const LEFT_ARROW = 37
// const UP_ARROW = 38
// const RIGHT_ARROW = 39
// const DOWN_ARROW = 40

// let headIndex = 0
// let bodyIndex = 0
// let shoesIndex = 0
// let partIndex = 0

// function nextClownBody() {
//   bodyIndex++
//   bodyIndex %= 6
//   let bodySrc = `./images/body${bodyIndex}.png`
//   bodyImg.src = bodySrc
// }

// function previousClownBody() {
//   bodyIndex--
//   if (bodyIndex < 0) bodyIndex += 6
//   bodyIndex %= 6
//   let bodySrc = `./images/body${bodyIndex}.png`
//   bodyImg.src = bodySrc
// }

// function nextClownShoes() {
//   shoesIndex++
//   shoesIndex %= 6
//   let shoesSrc = `./images/shoes${shoesIndex}.png`
//   shoesImg.src = shoesSrc
// }

// function previousClownShoes() {
//   shoesIndex--
//   if (shoesIndex < 0) shoesIndex += 6
//   shoesIndex %= 6
//   let shoesSrc = `./images/shoes${shoesIndex}.png`
//   shoesImg.src = shoesSrc
// }

// function nextClownHead() {
//   headIndex++
//   headIndex %= 6
//   let headSrc = `./images/head${headIndex}.png`
//   headImg.src = headSrc
// }

// function previousClownHead() {
//   headIndex--
//   if (headIndex < 0) headIndex += 6
//   headIndex %= 6
//   let headSrc = `./images/head${headIndex}.png`
//   headImg.src = headSrc
// }

// function nextPart() {
//   partIndex++
//   partIndex %= 3
// }

// function previousPart() {
//   partIndex--
//   if (partIndex < 0) partIndex += 3
//   partIndex %= 3
// }

// function previous() {
//   switch (partIndex % 3) {
//     case 0:
//       previousClownHead()
//       break

//     case 1:
//       previousClownBody()
//       break

//     case 2:
//     default:
//       previousClownShoes()
//   }
// }

// function next() {
//   switch (partIndex % 3) {
//     case 0:
//       nextClownHead()
//       break

//     case 1:
//       nextClownBody()
//       break

//     case 2:
//     default:
//       nextClownShoes()
//   }
// }

// document.addEventListener('keyup', (evt) => {
//   switch (evt.code) {
//     case 'ArrowLeft':
//       evt.preventDefault()
//       previous()
//       break

//     case 'ArrowRight':
//       evt.preventDefault()
//       next()
//       break

//     case 'ArrowUp':
//       evt.preventDefault()
//       previousPart()
//       break

//     case 'ArrowDown':
//       evt.preventDefault()
//       nextPart()
//       break

//     case 'KeyS':
//       evt.preventDefault()
//       save()

//     default:
//       console.log(evt.code)
//   }
// })

// function save() {
//   // create a canvas element the same size as the
//   // images
//   const canvas = document.createElement('canvas')
//   canvas.width = 384
//   canvas.height = 612

//   // draw each source image onto the canvas
//   const context = canvas.getContext('2d')
//   context.drawImage(shoesImg, 0, 0)
//   context.drawImage(bodyImg, 0, 0)
//   context.drawImage(headImg, 0, 0)

//   // Get a blob from the canvas
//   canvas.toBlob((blob) => {
//     // get a url for that blob
//     const url = URL.createObjectURL(blob)

//     // create a link to that url
//     const link = document.createElement('a')
//     document.body.appendChild(link)
//     link.href = url
//     // the download attribute asks the browser to
//     // save the file rather than navigate to it
//     link.download = 'saved-clown'
//     link.style.display = 'none'
//     // fake a click to cause the download
//     link.click()
//   })
// }
