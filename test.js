//Trangle Sum

const sum = (arr, newarr) => {
  //Base Condition
  if (arr.length <= 1) {
    return arr;
  }

  //To get sum for next array
  for (let i = 0; i < arr.length - 1; i++) {
    newarr[i] = arr[i] + arr[i + 1];
  }

  arr = newarr;

  //Recursion call
  return sum(arr, []);
};

// let ans = sum([1, 2, 3], []);
// console.log(ans);

//find a number in array binary-search

const findANumber = (array, target, start, end) => {
  //base condition
  if (start > end) return "number is not available";

  let mid = parseInt(start + (end - start) / 2);

  if (array[mid] == target) return mid;

  //Come right side
  if (array[mid] > target) {
    return findANumber(array, target, start, mid - 1);
  }
  //Come left side
  if (array[mid] < target) {
    return findANumber(array, target, mid + 1, end);
  }
};
let array = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];

// let answer = findANumber(array, 44, 0, array.length - 1);
// console.log("Index position is: ", answer);

// const findMinInArray = (array) => {
//   return Math.min(...array);
// };
// console.log(findMinInArray([1, 2, 4, 5, 3, -5]));
// console.log(Math.min(1, 4, 5, 7, 1, 2, 8));

//first capital letter

// const firstCapital = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) return str[i];
//   }
//   return -1;
// };
// console.log(firstCapital("ashuTosh"));

// const firstCapitalRecursion = (str, i) => {
//   if (str[i] === str[i].toUpperCase()) return str[i];

//   return firstCapitalRecursion(str, (i += 1));
// };
// console.log(firstCapitalRecursion("ashuTosh", 0));

//reverse Array of string

// https://leetcode.com/problems/reverse-string/
// const reverse = (s) => {
//   const reverseString = (array, newArr, i, j) => {
//     if (array.length == newArr.length) {
//       return newArr;
//     }

//     newArr[j] = array[i];
//     return reverseString(array, newArr, (i -= 1), (j += 1));
//   };

//   return reverseString(s, [], s.length - 1, 0);
// };

const str = ["h", "e", "l", "l", "o"];
// let reversedStr = reverse(str);
// console.log(reversedStr);

let name = "Ashutosh";
console.log(name.substring(1) + 1);

const strLength = (str) => {
  if (str == "") {
    return 0;
  }
  return strLength(str.substring(1)) + 1;
};
console.log(strLength(name));
