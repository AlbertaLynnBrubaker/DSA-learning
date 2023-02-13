const { c } = require('../../helper/consoleLogHelper')

var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1] - a[1])

    let space = truckSize
    let totalUnits = 0

    boxTypes.forEach((box)=> {
        let remainder = box[0] < space ? box[0] : space
        space -= remainder
        totalUnits += box[1] * remainder

        if(space === 0) {
          return
        }
    })

    return totalUnits  
};

c({res: maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35)})