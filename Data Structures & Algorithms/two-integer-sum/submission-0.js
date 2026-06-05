class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = []
        for(let i =0; i < nums.length ; i++ ){
            for(let j = i+1; j < nums.length; j++ ){
                if(Number(nums[i]) + Number(nums[j]) == target){
                    res.push(i);
                    res.push(j);
                    return res;
                }
            }
        }
    }
}
