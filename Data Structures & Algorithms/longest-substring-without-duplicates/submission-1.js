class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0 ) return 0
        let m = new Map()
        let l = 0
        let max = 0
        for(let i = 0; i < s.length; i++){
            if(m.has(s[i]) && l <= m.get(s[i])){
                l = m.get(s[i]) + 1
            }
            m.set(s[i], i)
            max = Math.max(max, i - l + 1)
        }
        return max
    }
}
