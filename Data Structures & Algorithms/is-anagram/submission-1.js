class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        let sortedS = s.split('').sort().join('')
        let sortedT = t.split('').sort().join('')
        let freqS = {}
        let freqT = {}
        let length = sortedS.length;
        for(let i = 0 ; i < length; i++){
            if(sortedS[i] in freqS){
                freqS[sortedS[i]] = freqS[sortedS[i]]+1
            } else {
                freqS[sortedS[i]] = 1;
            }

            if(sortedT[i] in freqT){
                freqT[sortedT[i]] = freqT[sortedT[i]]+1
            } else {
                freqT[sortedT[i]] = 1;
            }
        }

        let keysforS = Object.keys(freqS)
        let keysforT = Object.keys(freqT)

        for(let key of keysforS ){
            if(freqS[key] !== freqT[key]){
                return false
            }
        }

        return true
    }
}