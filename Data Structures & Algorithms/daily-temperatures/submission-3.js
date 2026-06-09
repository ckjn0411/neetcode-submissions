class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        
        let res = new Array(temperatures.length).fill(0)
        let tmp = []
        for(let i = 0; i < temperatures.length; i++){
            while(tmp.length > 0 && temperatures[i] > temperatures[tmp[tmp.length - 1]]){
                let preIndex = tmp.pop()
                res[preIndex] = i - preIndex
            }
            tmp.push(i)
        }
        return res
    }
}