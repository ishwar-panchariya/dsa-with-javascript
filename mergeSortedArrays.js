
// function reverseAString(str) {

//   if(!str || str.length < 2 || typeof str !== 'string') return 'Invalid string. Try again...';

//   let reverseStringArr = [];
//   const totalCharacters = str.length;
  
//   for(let i = totalCharacters; i >= 0; i--) {
//     reverseStringArr.push(str[i]);
//   }

//   const reversedString = reverseStringArr.join('')
//   return reversedString;
// }

// reverseAString('My name is Ishwar!');

function mergeSortedArrays(array1, array2) {

  const mergedArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while(array1Item || array2Item) {
    if(!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }
    else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  
  console.log(mergedArray)
  return mergedArray;
}

mergeSortedArrays([1,2,3,7], [2,4,90]);