
const str1 = "3[a]2[bc]"
const str2 = "3[a2[c]]"
const str3 = "2[abc]3[cd]ef"

// We create a stack
// we run a for loop of each character in the string
// if the character is not a closing square bracket, we are pushing the character onto the stack and relooping

// we set the current to the last character
// we initialize a string
// in a while loop, we make sure that current isn't an opening square bracket
// otherwise we concatenate the current character into the str and reset current to the last item on the stack

// we start a number string
// since we know we hit our opening bracket, the following chars will be numbers. While they are numbers we keep pushing the current into the number string and popping our current off the stack

// When we know we have the string and the number, we repeat the string number of times and push them into the stack.
// if there are more number bracket string combos, the for loop will do it again.

// const decodeString = s => {
//   const stack = []
//   for (const char of s) {
//     if (char !== "]") { 
//       stack.push(char)
//       continue
//     }

//     let cur = stack.pop()
//     let str = ''
//     while (cur !== '[') {
//       str = cur + str
//       cur = stack.pop()
//     }

//     let num = ''
//     cur = stack.pop()
//     while (!Number.isNaN(Number(cur))) {
//       num = cur + num
//       cur = stack.pop()
//     }
    
//     stack.push(cur)
//     stack.push(str.repeat(Number(num)))
//   }
//   return stack.join('')
// }

var decodeString = function(str) {
  let stack = [];
  let currStr = '';
  let currNum = 0;
  for (let i = 0; i < str.length; i ++) {
      if (str[i] === '[') {
          stack.push(currStr);
          stack.push(currNum);
          currStr = '';
          currNum = 0;
      } else if (str[i] === ']') {
          let prevNum = stack.pop();
          let prevStr = stack.pop();
          currStr = prevStr + currStr.repeat(prevNum);
      } else if (!isNaN(str[i])) {
          currNum = `${currNum}${str[i]}`
      } else {
          currStr += str[i];
      }
  }
  return currStr;
}


c({res: decodeString(str3)})