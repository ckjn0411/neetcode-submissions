class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let numsSorted = nums.sort((a,b)=>a - b)
        let sum = 0;
        let res = []
        for(let i = 0; i < numsSorted.length - 2; i++){
            if(numsSorted[i] > 0) break;
            if(i > 0 && numsSorted[i] === numsSorted[i - 1]) continue;

            let j = i + 1
            let k = numsSorted.length - 1

            while(j < k){
                sum = numsSorted[i] + numsSorted[j] + numsSorted[k]
                if(sum < 0){
                    j++
                }else if(sum > 0){
                    k--
                }else{
                    res.push([numsSorted[i], numsSorted[j], numsSorted[k]])
                    while(j < k && numsSorted[j] === numsSorted[j + 1]) j++
                    while(j < k && numsSorted[k] === numsSorted[k - 1]) k--
                    j++
                    k--
                }

            }
        }
        return res
    }
}
