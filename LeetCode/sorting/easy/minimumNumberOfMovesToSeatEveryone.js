const { c } = require('../../helper/consoleLogHelper')

var minMovesToSeat = function(seats, students) {
  seats = seats.sort((a, b) => a - b)
  students = students.sort((a, b) => a - b)
  let moves = 0
  for(let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]) 
  }
  return moves
};

c({res: minMovesToSeat([3,20,17,2,12,15,17,4,15,20], [10,13,14,15,5,2,3,14,3,18])})