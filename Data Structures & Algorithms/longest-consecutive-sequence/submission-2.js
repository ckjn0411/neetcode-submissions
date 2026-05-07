class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;

        let set = new Set(nums)
        let longest = 0
        for(let num of set){
            let currLong = 1;
            if(!set.has(num - 1)){
                let currNum = num
                while(set.has(currNum + 1)){
                    currLong += 1
                    currNum += 1
                }
            }
            longest = Math.max(longest, currLong)
        }
        return longest
    }
}
