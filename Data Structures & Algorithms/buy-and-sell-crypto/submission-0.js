class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 0) return 0
        let profit = 0
        let min = prices[0]
        for(let i = 0; i < prices.length; i++){
            if(min > prices[i]){
                min = prices[i]
            }else{
                if(profit < prices[i] - min){
                    profit = prices[i] - min
                }
            }
        }
        return profit
    }
}
