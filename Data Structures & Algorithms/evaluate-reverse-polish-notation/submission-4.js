class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    
    evalRPN(tokens) {
        function calculate(num1, opString, num2) {
            num1 = parseInt(num1)
            num2 = parseInt(num2)
            switch (opString) {
                case '+': return num1 + num2;
                case '-': return num2 - num1;
                case '*': return num1 * num2;
                case '/': return Math.trunc(num2 / num1);
                default:  return "Invalid operator";
            }
        }

        function swap(n1, n2){
            let tmp = n1
            n1 = n2
            n2 = tmp
        }
        let stack = []
        for(let c of tokens){
            if(c.match("[0-9]")){
                stack.push(c)
                // console.log(c)
            }else{
                let n1 = stack.pop()
                let n2 = stack.pop()
                // swap(n1, n2)
                console.log('n1 ' + n1)
                console.log('n2 ' + n2)
                console.log('c ' + c)
                console.log('res ' + calculate(n1,c,n2))
                stack.push(calculate(n1,c,n2))

            }
        }

        return stack.pop()
    }
}
