

var countStudents = function(students, sandwiches) {

  // iterate through comparing index 0 for both arrays until there are no students who will take a sandwich
  while(students.length > 0 && students.indexOf(sandwiches[0])!=-1) { 
    if(students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
    } else {
      students.push(students.shift())
    }
  }
  return students.length
};


c({res: countStudents([0,0,0,1,1,1,1,0,0,0], [1,0,1,1,0,1,1,0,0,0])})