// 17. Letter Combinations of a Phone Number



/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    const phoneMap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    if(digits == ""){
        return []
    }

    let results = []

    function helper(index, sub){

        if(sub.length === digits.length){
            results.push(sub)
            return
        }

        for(let i = 0; i < phoneMap[digits[index]].length; i++){

            sub += phoneMap[digits[index]][i]

            helper(index + 1, sub)

            sub = sub.slice(0, -1)
        }
    }

    helper(0, "")

    return results
};