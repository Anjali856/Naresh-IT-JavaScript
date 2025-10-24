function findMissingNumber(numbers) {
    const n = numbers.length + 1; // Total numbers including the missing one
    const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const arraySum = numbers.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
}

// Test Case 1
const testCase1 = [1, 2, 3, 5];
console.log(findMissingNumber(testCase1)); // Output: 4

// Test Case 2
const testCase2 = [3, 5, 7, 8];
// For this case, the numbers are not starting from 1, so sum formula won't work directly
// We can use the min-max formula: sum of range from min to max
function findMissingNumberRange(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const expectedSum = ((max - min + 1) * (min + max)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumberRange(testCase2));
