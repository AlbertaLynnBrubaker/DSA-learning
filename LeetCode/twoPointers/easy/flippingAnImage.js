

const img1 = [[1,1,0],[1,0,1],[0,0,0]]
const img2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]

// var flipAndInvertImage = function(image) {
//   for(let i = 0; i < image.length; i++){
//       let left = 0;
//       let right = image[i].length-1;
//       while(left <= right){
//           if(left === right){
//               image[i][left] = image[i][left] === 0 ? 1 : 0
//           }else{
//               [image[i][left], image[i][right]] = [image[i][right], image[i][left]]
//               image[i][left] = image[i][left] === 0 ? 1 : 0
//               image[i][right] = image[i][right] === 0 ? 1 : 0
//           }
//           left++
//           right--
//       }
//   }
//   return image
// };

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

    left = left ? 0 : 1
    right = right ? 0 : 1
    
    array[j] = right
    array[(len - 1) - j] = left
  }

  return array
}

c({res: flipAndInvertImage(img2)})