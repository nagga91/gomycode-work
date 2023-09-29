## JavaScript Basics

## Purpose

The purpose of this day project is to familiarize yourself with the basic manipulation methods for both arrays and objects. You will also practice creating variables and functions using logic and the content provided during class.

## Directions

Fork and clone this repository. Complete all of the exercises in the different folders (arrays, objects,...) file. When you have finished exercises, push your code to GitHub.

## Testing

To run the tests you must install mocha, a testing program, and use npm to install dependencies. In your terminal cd to the project directory. Then do the following.

```
npm install
```

and when that is finished you can run

```
npm test
```

to run the test for the different exercise topics

All test are set to pending initially. To enable a test for a specific exercise either change

```
xdescribe()
```

to

```
describe()
```

OR to

```
describe.only()
```

in the corresponding .test.js file. The former will still show all test, but enable that one, while the latter will only show that one as enabled.

If you have correctly completed the exercise, it will pop up as green with a checkmark. Otherwise, you will have red x's.

## Order Of Exercises

### Arrays

1. Create an Array - createArray.js
2. Find 2nd index - findTwo.js
3. Add to the end - addEnd.js
4. Add to the front - addFront.js
5. Remove from the end - removeEnd.js
6. Remove from the front - removeFront.js
7. Copy values - copyCat.js
8. Delete & insert - chopIt.js
9. Even & odd values - evenOdd.js
10. Sum values - sumIt.js
11. Multiply by 10 - timesTen.js
12. Remove duplicates - removeDuplicates.js

### Lists

1. Print animal names - printNames.js
2. Find Jumbo the Elephant - findElephant.js
3. Find Ophelia the Cat - findOphelia.js
4. Find all the old animals - oldAnimals.js
5. Find all female animals - findFemales.js
6. Update the favorite food of the animals - updateFood.js

### Strings

1. Count string - countString.js
2. Reverse string - reverseString.js
3. Check if string has no duplicate characters - isUnique.js
4. Check if two strings are anagrams - isAnagram.js
5. Create URL string - urlify.js
6. Check if string is a palindrome - isPalindrome.js
7. Check if two strings are one edit away from each other - isOneEditAway.js
8. Create simple string compression - compressString.js
9. Rotate matrix by 90 degrees - rotateMatrix.js

### Objects

1. Create an object animal - animal.js
2. Return age - findAge.js
3. Get all keys - getKeys.js
4. Change value for key name - changeName.js
5. Function to make a noise - makeNoise.js
6. Add a key - addKey.js
7. Loop over keys - keyLoop.js
8. Multiple animals - moreAnimals.js
9. Find species - findSpecies.js
10. Sort by name - sortByName.js

### Recursion

1. Calculate the factorial for given number - factorial.js
2. Calculate nth Fibonacci number - fibonnaci.js

### Sorting

1. Implement Bubble Sort - bubbleSort.js
