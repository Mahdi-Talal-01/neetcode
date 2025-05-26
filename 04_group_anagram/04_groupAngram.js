//
class NonOptimizedSolution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  ASCIISuma(word) {
    let suma = 0;
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < word[i].length; j++) {
        let char_code = word[i].charCodeAt(j);
        suma += char_code;
      }
    }
    return suma;
  }

  groupAnagrams(strs) {
    let anagramsMap = new Map();
    let index = 0;
    const anagrams = [];
    //calculate ASCI for each word
    for (let word of strs) {
      const ascii = this.ASCIISuma(word);
      if (anagramsMap.has(ascii)) {
        anagrams[anagramsMap.get(ascii)].push(word);
      } else {
        anagramsMap.set(ascii, index);
        anagrams[index++] = [word];
      }
    }
    return anagrams;
  }
}

//
class OptimizedSolution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (let word of strs) {
      // Sort the word to use as a key
      const sorted = word.split("").sort().join("");

      if (!map.has(sorted)) {
        map.set(sorted, []);
      }

      map.get(sorted).push(word);
    }

    // Return the grouped anagrams
    return Array.from(map.values());
  }
}

const nonOptimizedSolution = new NonOptimizedSolution();
const optimizedSolution = new OptimizedSolution();
console.log(
  nonOptimizedSolution.groupAnagrams([
    "act",
    "pots",
    "tops",
    "cat",
    "stop",
    "hat",
  ])
);
console.log(
  optimizedSolution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])
);
