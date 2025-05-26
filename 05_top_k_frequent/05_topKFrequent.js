class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = new Map();
    for (let num of nums) {
      if (map.has(num)) {
        let counter = map.get(num) + 1;
        map.set(num, counter);
      } else {
        map.set(num, 1);
      }
    }
    const values = Array.from(map.keys()).sort(
      (a, b) => map.get(b) - map.get(a)
    );
    return values.slice(0, k);
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 2, 2, 3, 3, 3, 3, 3, 4], 2));
console.log(solution.topKFrequent([7, 7], 1));
console.log(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(solution.topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2));
