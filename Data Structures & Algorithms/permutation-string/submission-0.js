class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false
        let map1 = new Map()
        for(let c of s1){
            map1.set(c, (map1.get(c) || 0) + 1)
        }

        const isMatch = (map1, map2) => {
            if(map1.size !== map2.size) return false
            for(let [key, val] of map1){
                if(map2.get(key) !== val) return false
            }
            return true
        }

        let map2 = new Map()
        let windowSize = s1.length
        for(let i = 0; i < s2.length; i++){
            map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)

            if(i >= windowSize){
                let l = s2[i - windowSize]
                map2.set(l, map2.get(l) - 1)
                if(map2.get(l) === 0){
                    map2.delete(l)
                }
            }

            if(i >= windowSize - 1){
                if(isMatch(map1, map2)) return true
            }
        }
        return false
    }
}
