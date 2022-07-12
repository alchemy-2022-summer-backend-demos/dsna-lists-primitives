function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function oddishOrEvenish(num) {
  const sumOfDigits = num
    .toString()
    .split("")
    .map((d) => +d)
    .reduce((a, b) => a + b);

  return sumOfDigits % 2 ? "Oddish" : "Evenish";
}

// function at(arr, index) {
//   return index > -1 ? arr[index] : arr[arr.length + index];
// }

const at = (a, i) => (i > -1 ? a[i] : a[a.length + i]);

function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    // if(i % 3 === 0 && i % 5 === 0) {
    //   list.push('FizzBuzz');
    // }
    // else if(i % 3 === 0) {
    //   list.push('Fizz')
    // }
    // else {
    //   list.push(i);
    // }

    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    list.push(result || i);
  }

  return list;
}

// okay to write ancillary functions
const orderLetters = (word) => word.split("").sort().join("");

function anagrams(wordOne, wordTwo) {
  return orderLetters(wordOne) === orderLetters(wordTwo);
}

// function uniqueString(strings) {
//   const normalized = strings.map((s) =>
//     [...new Set(s.toLowerCase())].sort().join("")
//   );

//   // special case to check if it's the first one:
//   if (normalized[0] !== normalized[1] && normalized[1] === normalized[2]) {
//     return strings[0];
//   }

//   const index = normalized.findIndex((string, i) => {
//     const prev = normalized[i - 1];
//     const next = normalized[i + 1];
//     return i !== 0 && string !== prev && string !== next;
//   });

//   return strings[index];
// }

// Alternate approach that supports multiple matching patterns
// eg. ['bar', 'bra', 'foo', 'abc', 'cab'] -> 'foo'
function uniqueString(strings) {
  const charGroups = strings.reduce((sorted, str) => {
    const uniqueChars = [...new Set(str.toLowerCase())].sort().join("");
    sorted[uniqueChars] ??= [];
    sorted[uniqueChars].push(str);

    return sorted;
  }, {});

  const unique = Object.values(charGroups).find(
    (words) => words.length === 1
  )[0];

  return unique;
}

function uniqueChar(string) {
  const chars = string.split("").sort();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const prev = chars[i - 1];
    const next = chars[i + 1];
    if (current !== prev && current !== next) return i;
  }

  return "_";
}

function equalSides(numbers) {
  // // O(n^2)!
  // for(let i = 0; i < numbers.length; i++) {
  //   const left = numbers.slice(0, i).reduce(((a, b) => a + b), 0);
  //   const right = numbers.slice(i + 1).reduce(((a, b) => a + b), 0);
  //   if(left === right) return i;
  // }
  // return -1;

  // O(n)  (2n still n, we care about exponent)
  let left = 0;
  let right = numbers.reduce((a, b) => a + b) - numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (left === right) return i;
    left += numbers[i];
    right -= numbers[i + 1];
  }
}

function isHappy(n) {
  const seen = {};
  while (true) {
    const sum = n
      .toString()
      .split("")
      .map((digit) => digit ** 2) // implicit conversion: '3' ** 2 --> 3 ** 2
      .reduce((a, b) => a + b);

    if (sum === 1) return true;
    if (seen[sum]) return false;
    seen[sum] = true;
    n = sum;
  }
}
module.exports = { reverseWords, titleCase };
