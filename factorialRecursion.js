// Function to find the factorial of a number iteratively
function findFactorialIterative(number) {
    // Initialize answer to 1 (the factorial of 0 and 1 is 1)
    let answer = 1;

    // Handle the cases for 0 and 1
    // Return the number itself if it's 0 or 1, since factorial(0) = 1 and factorial(1) = 1
    if (number === 0 || number === 1) return answer; 

    // Loop from 2 to the number (inclusive)
    for (let i = 2; i <= number; i++) {
        // Multiply the current answer by the loop index to calculate the factorial
        answer = answer * i;
    }
    
    // Return the final calculated factorial
    return answer;
}

// Example usage: Calculate the factorial of 5 iteratively
console.log(findFactorialIterative(5)); // Output: 120


// Function to find the factorial of a number recursively
function findFactorialRecursive(number) {
    // Handle the base case: if the number is 0 or 1, return 1
    if (number === 0 || number === 1) return 1;

    // Recursive case: multiply the number by the factorial of (number - 1)
    return number * findFactorialRecursive(number - 1);
}

// Example usage: Calculate the factorial of 5 recursively
console.log(findFactorialRecursive(5)); // Output: 120
