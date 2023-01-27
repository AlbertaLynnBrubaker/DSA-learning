

var finalPrices = function(prices) {
  const stack = []
  let i = 0
  let j = 1

  while(i <= prices.length - 1) {
    if(j > prices.length - 1) {
      stack.push(prices[i])
      i++
      j = i + 1
    }
    if(prices[i] >= prices[j]) {
      stack.push(prices[i] - prices[j])
      i++
      j = i + 1
    }
    if(prices[i] < prices[j]) j++
  }

  return stack
};

c({res: finalPrices([8,4,6,2,3])})