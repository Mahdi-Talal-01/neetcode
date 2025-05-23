// [1,2,3,4,1]
/*
  1. we can loop for every i in the array and check if its duplicate but its have a O(n*n)
  2. we can sort the array ,and check n and n+1 => O(n log n)
  3.hashset=> cannot has dublicate , search of set has(value) big O(1)
 */
const set = new Set();
const containDublicate = (nums) => {
    // loop over nums
    for (num of nums){
        if(hashset(num)) return true
        
    }
     return false
};
const hashset = (value) =>{
    if (set.has(value)) return true;
    set.add(num);
}
console.log(containDublicate([1,2,3,4]));

