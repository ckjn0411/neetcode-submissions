class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        if(nums.length == 1) return nums
        for(let n of nums){
            map.set(n, (map.get(n) || 0) + 1)
        }
        const res = [...map.entries()]
        res.sort((a,b) => b[1] - a[1]);
        return res.map(i => i[0]).slice(0, k)
    }
}
