class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = Object.groupBy(strs, (s) => {
            return s.split('').sort().join('');
        })
        return Object.values(group)
    }
}
