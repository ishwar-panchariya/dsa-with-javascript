/* 
* Input can be a String or an  Array
* input = [1,2,3,4,2,5,6,7,8]
* input = 'abcdeadgdef'
*/

// 1. First Approach: object {}
function firstRepeatingCharacter(input) {
  console.time('firstRepeatingCharacter');

  const map = {};

  for (let i = 0; i < input.length; i++) {
    if(map[input[i]] != undefined) {
      return input[i];
    }
    else {
      map[input[i]] = i;
    }
  }

  return undefined;
}

// 2. Second Approach : Map()
function firstRepeatingCharacter2(input) {
  console.time('firstRepeatingCharacter');

  const map = new Map();

  for (let i = 0; i < input.length; i++) {
    if(map.has(input[i])) {
      console.timeEnd('firstRepeatingCharacter');
      console.log(input[i]);
      return input[i];
    }
    else {
      map.set(input[i]);
    }
  }

  return undefined;
}

firstRepeatingCharacter([1,2,3,4,2,5,6,7,8]);
firstRepeatingCharacter('abcdedgdef');

firstRepeatingCharacter2([1,2,3,4,2,5,6,7,8]);
firstRepeatingCharacter('abcdedgdef');