class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const m = {
            '(':')',
            '{':'}',
            '[':']'
        }
        let stack = []
        for(let c of s){
            if(c in m){
                stack.push(c)
            }else{
                if(stack.length > 0){
                    if(c !== m[stack.pop()]){
                        return false;
                    }
                }else{
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
