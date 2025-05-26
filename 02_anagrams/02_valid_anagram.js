//  cat == tac
class Solution {
  isValidAnagram(str1, str2) {
    const arr1 = str1.split("");
    const set = new Set(arr1);
    const arr2 = str2.split("");
    console.log(set)

    if (arr1.length != arr2.length) return false;

    arr2.forEach((element, index) => {
        console.log(element)
      if (!set.has(element)) return false ;

    });
  }
}
const solution = new Solution();
console.log(solution.isValidAnagram("cat", "tar"));
