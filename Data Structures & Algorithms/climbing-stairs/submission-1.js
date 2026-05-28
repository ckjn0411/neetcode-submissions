class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 2) return n
        let prev = 1
        let curr = 2
        let res = 0
        for(let i = 3; i <= n; i++){
            res = prev + curr
            prev = curr
            curr = res
        }
        return res
    }
}
