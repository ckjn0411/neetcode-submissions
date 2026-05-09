class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxCur = nums[0]
        let maxA = nums[0]
        for(let i = 1; i < nums.length; i++){
            maxCur = Math.max(nums[i], maxCur + nums[i])
            maxA = Math.max(maxA, maxCur)
        }
        return maxA
    }
}
