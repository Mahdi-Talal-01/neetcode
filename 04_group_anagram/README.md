# NeetCode 150 Solutions

This repository contains solutions to the NeetCode 150 coding problems, a curated list of the most important coding interview questions.

## Group Anagrams Problem

### Problem Description
Given an array of strings `strs`, group the anagrams together. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

### Solutions

#### Optimized Solution
The optimized solution uses a sorting approach to group anagrams:
1. Iterate through each word in the input array
2. Sort each word's characters to create a key
3. Use a Map to group words with the same sorted key
4. Return all groups as an array

```javascript
// Example usage
const optimizedSolution = new OptimizedSolution();
const result = optimizedSolution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
// Output: [["act", "cat"], ["pots", "tops", "stop"], ["hat"]]
```

Time Complexity: O(n * k * log k) where:
- n is the number of strings
- k is the maximum length of a string
- The sorting step takes k * log k for each string

Space Complexity: O(n * k) to store all strings in the groups

#### Non-Optimized Solution (ASCII Sum Approach)
This solution uses ASCII sum to identify potential anagrams:
1. Calculate ASCII sum for each word
2. Group words with the same ASCII sum
3. Return grouped anagrams

Note: This solution might have false positives in some cases since different combinations of characters could produce the same ASCII sum.

```javascript
// Example usage
const nonOptimizedSolution = new NonOptimizedSolution();
const result = nonOptimizedSolution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
```

Time Complexity: O(n * k) where:
- n is the number of strings
- k is the maximum length of a string

Space Complexity: O(n * k) to store all strings in the groups

### Function Signatures
```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
groupAnagrams(strs)
```

### Example Input/Output
Input: `["eat","tea","tan","ate","nat","bat"]`
Output: `[["bat"],["nat","tan"],["ate","eat","tea"]]`

### Notes
- The order of the output and the order of the strings within each group doesn't matter
- All inputs will be lowercase letters
- The optimized solution is preferred in practice as it guarantees correct grouping of anagrams 