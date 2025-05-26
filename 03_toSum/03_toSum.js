class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let numbersMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (numbersMap.has(complement)) {
        return [numbersMap.get(complement), i];
      }
      numbersMap.set(nums[i], i);
    }
    return []; // if no solution found
  }
}
