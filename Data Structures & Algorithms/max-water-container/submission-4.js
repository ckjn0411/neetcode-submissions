class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1
        let max = 0

        while(i < j){
            let f = (j - i) * Math.min(heights[i], heights[j])
            if(f > max){
                max = f
            }
            if(heights[i] < heights[j]){
                i++
            }else{
                j--
            }
        }
        return max
    }
}
