

var calPoints = function(operations) {
  const record = []
  let score = 0

  operations.forEach(op => {
    let temp = 0
    switch (op) {
      case "C":
        score -= record.pop()
        return
      case "D":
        temp = (record[record.length -1] * 2)
        record.push(temp)
        score += temp
        return
      case "+":
        temp = record[record.length -1] + record[record.length - 2]
        record.push(temp)
        score += temp
        return
      default:
        temp = parseInt(op)
        record.push(temp)
        score += temp
        return
    }
  })

  return score
};

c({res: calPoints(["5","-2","4","C","D","9","+","+"])})