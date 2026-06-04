class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = {}
        for(let i = 0 ; i < nums.length ; i++ ){
            if(nums[i] in freq){
                return true;
            } else {
                freq[nums[i]] = 1
            }
        }

        return false;
    }
}
