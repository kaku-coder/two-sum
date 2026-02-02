
var twoSum = function (number, target) {
  let result = [];

  number.forEach((a, i) => {
    number.forEach((b, j) => {
      if (i !== j && a + b === target) {
        result = [i, j];
      }
    });
  });

  return result;
};

Step 1: Function Initialization

The function twoSum is defined with two parameters:

number: an array of integers

target: the required sum of two elements

Step 2: Result Array Creation
let result = [];


An empty array result is created to store the indices of the two elements that add up to the target.

Step 3: Outer Loop Execution
number.forEach((a, i) => {


Iterates over each element in the array

a represents the current value

i represents the index of the current value

Step 4: Inner Loop Execution
number.forEach((b, j) => {


Iterates over the array again for each outer loop iteration

b represents the second value

j represents the index of the second value

Step 5: Condition Evaluation
if (i !== j && a + b === target) {


Two conditions are checked:

i !== j ensures the same element is not used twice

a + b === target checks whether the two values add up to the target

Step 6: Storing the Matching Indices
result = [i, j];


When both conditions are satisfied, the indices of the matching elements are stored in the result array.

Step 7: Completion of Iterations

Both loops continue running even after a valid pair is found, ensuring all combinations are checked.

Step 8: Returning the Result
return result;


After all iterations are complete, the function returns the result array containing the indices of the two numbers that sum to the target.

Example Execution

Input

number = [3, 2, 4]
target = 6


Process

3 + 2 ≠ 6

3 + 4 ≠ 6

2 + 4 = 6 → indices [1, 2]

Output

[1, 2]

Complexity Analysis
Time Complexity: O(n²) — due to nested loops
Space Complexity: O(1) — no extra data structures used
