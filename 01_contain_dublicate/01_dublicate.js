// [1,2,3,4,1]
/*
  1. we can loop for every i in the array and check if its duplicate but its have a O(n*n)
  2. we can sort the array ,and check n and n+1 => O(n log n)
  3.hashset=> cannot has dublicate , search of set has(value) big O(1)
 */
class Solution {
  hasDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
      if (set.has(num)) return true;
      set.add(num);
    }
    return false;
  }
}

// Example usage:
const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 3, 4])); // false
console.log(solution.hasDuplicate([1, 2, 3, 1])); // true
