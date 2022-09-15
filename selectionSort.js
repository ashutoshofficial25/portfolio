const selectonSort = (nums) => {
  //Outer Loop start form 0 index
  for (let i = 0; i < nums.length; i++) {
    //store the 1st element index : assume as minimim
    let element = i;

    //inner start form next element from i; : Because previous one  is sorted one by one
    for (let j = i + 1; j < nums.length; j++) {
      //if minimum element than previous found then change the minimum index value
      if (nums[element] > nums[j]) {
        element = j;
      }
    }

    // if swap the minimum with the starting index
    let temp = nums[i];
    nums[i] = nums[element];
    nums[element] = temp;
  }
};

let array = [20, 4, 5, 3, 7, 14, 5, 3, 15];
// selectonSort(array);
// console.log(array);

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let boolean = false;
    for (let j = 0; j < nums.length - i; j++) {
      //previous is greater than next
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        boolean = true;
      }
    }
    if (!boolean) break;
  }
};

// bubbleSort(array);
// console.log(array);

let arr = [5, 3, 2, 1, 0];

const sequence = (array) => {
  array.sort();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j] !== j) return j;
    }
    return -1;
  }
};

// console.log(sequence(arr));

const intersection = (nums1, nums2) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        map[nums1[i]] = (map[nums1[i]] || 0) + 1;
      }
    }
  }
  let arr = [];
  for (let keys in map) {
    arr.push(parseInt(keys));
  }
  return arr;
};

// let arr1 = [1, 2, 5, 2, 3, 2, 1];
// let arr2 = [2, 8, 7, 1, 0, 1, 2];

// console.log(intersection(arr1, arr2));

// let nums = [3, 30, 34, 5, 9];

// const largestNumber = (nums) => {
//   return nums.join("").split("");
// };
// console.log(largestNumber(nums));

const kthLargestNumber = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    //store the 1st element index : assume as minimim
    let element = i;

    //inner start form next element from i; : Because previous one  is sorted one by one
    for (let j = i + 1; j < nums.length; j++) {
      //if minimum element than previous found then change the minimum index value
      if (nums[element] > nums[j]) {
        element = j;
      }
    }

    // if swap the minimum with the starting index
    let temp = nums[i];
    nums[i] = nums[element];
    nums[element] = temp;
  }

  return nums[nums.length - 1 - k];
};

console.log(kthLargestNumber([4, 4, 8, 74, 8, 6, 22], 4));
