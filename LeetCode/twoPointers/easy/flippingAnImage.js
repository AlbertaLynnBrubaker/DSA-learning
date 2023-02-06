const { c } = require('../../helper/consoleLogHelper')

const img1 = [[1,1,0],[1,0,1],[0,0,0]]
const img2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]

// var flipAndInvertImage = function(image) {
//   for(let i = 0; i < image.length; i++) {
//     image[i] = flipAndInvert(image[i])
//   }
//   return image
// };

// const flipAndInvert = function(array) {
//   const len = array.length
  
//   for(let i = 0; i < Math.floor(len/2); i++) {
//     let temp = array[i]
//     array[i] = array[(len - 1) - i]
//     array[(len - 1) - i] = temp
//   }

//   for(let i = 0; i < len; i++) {
//     if(array[i] === 1) array[i] = 0
//     else array[i] = 1
//   }
//   return array
// }

var flipAndInvertImage = function(image) {
  for(let i = 0; i < image.length; i++) {
    image[i] = flipAndInvert(image[i])
  }
  return image
};

const flipAndInvert = function(array) {
  const len = array.length

  for(let j = 0; j < Math.ceil(len/2); j++) {
    let left = array[j]
    let right = array[(len - 1) - j]

    left ? left = 0 : left = 1
    right ? right = 0 : right = 1
    
    array[j] = right
    array[(len - 1) - j] = left
  }

  return array
}

c({res: flipAndInvertImage(img2)})