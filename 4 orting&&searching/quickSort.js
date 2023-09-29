/*
Quicksort
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. 
When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.
It is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation is defined.
Quicksort uses these steps.
  1. Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; 
  explore the options and note their advantages.
  2. Divide all other elements (except the pivot) into two partitions.
  3. All elements less than the pivot must be in the first partition.
  4. All elements greater than the pivot must be in the second partition.
  5. Recursively apply the above process to the two partitions
  6. Join the first sorted partition, the pivot, and the second sorted partition.
The best pivot creates partitions of equal length (or lengths differing by 1). 
The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).
Extra Credit: Perform the sort in place. Watch how at https://www.youtube.com/watch?v=ywWBy6J5gz8
NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array with 0 or 1 element is already sorted
  }

  const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
  const leftPartition = [];
  const rightPartition = [];

  // Partition the array into two partitions: elements less than the pivot and elements greater than the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].value < pivot.value) {
      leftPartition.push(arr[i]);
    } else {
      rightPartition.push(arr[i]);
    }
  }

  // Recursively apply Quicksort to the two partitions
  const sortedLeft = quickSort(leftPartition);
  const sortedRight = quickSort(rightPartition);

  // Join the sorted partitions and the pivot to get the final sorted array
  return [...sortedLeft, pivot, ...sortedRight];
}

// Example usage:
const sortedArray = quickSort([
  { value: 2 },
  { value: 1 },
  { value: 3 },
  { value: 5, order: 2 },
  { value: 5, order: 1 },
]);

console.log(sortedArray);
