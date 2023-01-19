// var floodFill = function(image, sr, sc, color) {
//   if(image[sr][sc] === color) return image
//   const original = image[sr][sc]
  
//   const recursion = function(image, i, j) {
//     if(image[i][j] !== original) return image[i][j]
    
//     image[i][j] = color
    
//     if(i - 1 >= 0) recursion(image, i - 1, j)
//     if(i + 1 <= image.length - 1) recursion(image, i + 1, j)
//     if(j - 1 >=0) recursion(image, i, j - 1)
//     if(j + 1 <= image[i].length -1) recursion(image, i, j + 1)
//     return image
//   }
//   image = recursion(image, sr, sc)

//   return image
// };

var floodFill = function(image, sr, sc, color) {
  const original = image[sr][sc]
  if( original === color) return image

  const fill = function(image, sr, sc) {
    if(
      sr < 0 ||
      sc < 0 ||
      sr >= image.length ||
      sc >= image[sr].length ||
      image[sr][sc] !== original
    ) return image
    
    image[sr][sc] = color
    fill(image, sr - 1, sc)
    fill(image, sr + 1, sc)
    fill(image, sr, sc - 1)
    fill(image, sr, sc + 1)
    return image
  }
  return fill(image, sr, sc)
}

// Fastest on LeetCode
// var floodFill = function(image, sr, sc, color) {
//   const currColor = image[sr][sc]
//   if (currColor === color) return image

//   function fill(image, sr, sc) {
//     if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length || image[sr][sc] !== currColor) return image
//     image[sr][sc] = color
//     fill(image, sr + 1, sc)
//     fill(image, sr - 1, sc)
//     fill(image, sr, sc + 1)
//     fill(image, sr, sc - 1)
//     return image
//   }
//   return fill(image, sr, sc)
// };




const image1 = [[1,1,1],[1,1,0],[1,0,1]]
const image2 = [[0,0,0],[0,0,0],[0,0,0]]

console.log(floodFill(image1, 1, 1, 2))