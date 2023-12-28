/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length)
    return false;
  setofvalues = new Map;
  
  for(let i=0;i<str1.length;i++)
  {
    const ch = str1[i].toLowerCase();
    setofvalues.set(ch,(setofvalues.get(ch) || 0)+1);
  }
  for(let j=0;j<str2.length;j++)
  {
    const ch = str2[j].toLowerCase();
    if(!setofvalues.has(ch))
      return false;
    setofvalues.set(ch,(setofvalues.get(ch) || 0) - 1);
  }

  for(const count of setofvalues.values())
  {
    if(count!==0) return false;
  }
  return true;
}

module.exports = isAnagram;
