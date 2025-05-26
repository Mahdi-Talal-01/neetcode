# Top K Frequent Elements

## Problem Description
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

## Solution Approach
The solution uses a HashMap/Map and sorting approach:
1. Create a frequency map to count occurrences of each number
2. Convert map keys to array and sort based on frequency counts
3. Return first k elements

### Time Complexity
- Building frequency map: O(n) where n is length of input array
- Sorting based on frequency: O(m log m) where m is number of unique elements
- Overall: O(n + m log m)

### Space Complexity
- O(m) where m is number of unique elements in the array
- We need space for the HashMap and the sorted array

## Example Usage
```javascript
const solution = new Solution();

// Example 1
console.log(solution.topKFrequent([1, 2, 2, 3, 3, 3, 3, 3, 4], 2));
// Output: [3, 2]
// Explanation: '3' appears 5 times, '2' appears 2 times

// Example 2
console.log(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2));
// Output: [1, 2]
// Explanation: '1' appears 3 times, '2' appears 2 times

// Example 3
console.log(solution.topKFrequent([7, 7], 1));
// Output: [7]
```

## Function Signature
```javascript
/**
 * @param {number[]} nums - The input array of numbers
 * @param {number} k - Number of top frequent elements to return
 * @return {number[]} - Array of k most frequent elements
 */
topKFrequent(nums, k)
```

## Notes
- The solution maintains the original array unchanged
- If multiple elements have the same frequency, their relative order in the output can be arbitrary
- The solution handles edge cases like:
  - Array with all same elements
  - k = 1
  - Array with all unique elements 