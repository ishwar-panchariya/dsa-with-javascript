
function reverseAString(str) {

  if(!str || str.length < 2 || typeof str !== 'string') return 'Invalid string. Try again...';

  let reverseStringArr = [];
  const totalCharacters = str.length - 1;
  
  for(let i = totalCharacters; i >= 0; i--) {
    reverseStringArr.push(str[i]);
  }
  const finalString = reverseStringArr.join('');
  console.log(finalString, finalString === str, finalString === str ? finalString + ' : It is a palindrome string' : finalString)

  return finalString;
}

reverseAString('My name is Ishwar!');
reverseAString('ABCDCBA');