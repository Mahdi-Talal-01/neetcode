# NeetCode 150 Solutions

This repository contains solutions to the NeetCode 150 coding problems, a curated list of the most important coding interview questions.

## Two Sum Problem

### Problem Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to the `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

### Solution Approach
The solution uses a HashMap/Map to achieve O(n) time complexity:
1. Iterate through the array once
2. For each number, calculate its complement (target - current number)
3. Check if the complement exists in the map
4. If found, return the current index and the complement's index
5. If not found, add the current number and its index to the map

### Time and Space Complexity
- Time Complexity: O(n) where n is the length of the input array
- Space Complexity: O(n) to store the hashmap

### Example Usage
```javascript
const solution = new Solution();
const nums = [2, 7, 11, 15];
const target = 9;
const result = solution.twoSum(nums, target);
// Output: [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
```

### Function Signature
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
twoSum(nums, target)
``` 