class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let visited = {}
        for(let i =0; i < nums.length ; i++ ){
            let complement = target - nums[i];
            if(complement in visited){
                return [i, visited[complement]]
            } else {
                visited[nums[i]] = i
            }
        }
    }
}
