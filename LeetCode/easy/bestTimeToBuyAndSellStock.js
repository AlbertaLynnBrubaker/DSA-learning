// var maxProfit = function(prices) {
  //   let max = 0
  //   let priceFloor = prices[0]
  
  //   for(let i = 1; i < prices.length; i++) {
    //     if(prices[i] < priceFloor) {
      //       priceFloor = prices[i]
      //     }
      //     if(prices[i] - priceFloor > max) {
        //       max = prices[i] - priceFloor
        //     }
        //   }
        //   return max
        // };
prices = [7,1,5,3,6,4]
        
// var maxProfit = function(prices) {
//   let minPrice = prices[0]
  
//   return getMax(prices, 0, minPrice, 0)
// }

// const getMax = function(prices, index, minPrice, max) {
//   if(prices.length === index) return max
//   let earn = prices[index] - minPrice
//   max = Math.max(earn, max)
//   minPrice = Math.min(minPrice, prices[index])
//   return getMax(prices, ++index, minPrice, max)
// }

// HOLY FUCK I NEVER HAD A CHANCE


function findMaximumProfit(prices, i, k, buy, v) {
  // If no stock can be chosen
  if (i >= prices.length || k <= 0)
      return 0;

  if (v[i][buy] != -1)
      return v[i][buy];

  // If a stock is already bought
  // Buy now
  let nbuy;
  if (buy == 1)
      nbuy = 0;
  else
      nbuy = 1;
  if (buy == 1) {
      return v[i][buy] = Math.max(-prices[i] +
          findMaximumProfit(prices, i + 1, k, nbuy, v),
          findMaximumProfit(prices, i + 1, k, buy, v));
  }

  // Otherwise
  else {

      // Buy now
      if (buy == 1)
          nbuy = 0;
      else
          nbuy = 1;
      return v[i][buy] = Math.max(prices[i] +
          findMaximumProfit(prices, i + 1, k - 1, nbuy, v),
          findMaximumProfit(prices, i + 1, k, buy, v));
  }
}

// Function to find the maximum
// profit in the buy and sell stock
function maxProfit(prices) {
  let n = prices.length;
  let v = new Array(n).fill(0).map(() => new Array(2).fill(-1))
  // v = [[-1, -1],[-1, -1],[-1, -1],[-1, -1],[-1, -1],[-1, -1]]

  // buy = 1 because atmost one
  // transaction is allowed
  return findMaximumProfit(prices, 0, 1, 1, v);
}

console.log(maxProfit(prices))