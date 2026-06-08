class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
       
        for(let i = 0; i < strs.length ; i++){
            let word = strs[i]
            let sortedS = word.split('').sort().join('')
            if(!(sortedS in map)){
                map[sortedS] = []
            } 

            map[sortedS].push(word)       
        }
        return Object.values(map)
    }
}
