// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function naturalMultiples(number) {
  //   Edge cases
  //     - if number is negative return 0
  //     - if the number is a multiple of both 3 and 5, only count it once
  //     - if number is less then 4 return 0

  if (number < 4) return 0;

  let setOfMuultiples = new Set();

  // Logic to get multiples
  let mulOfFive = Math.floor((number - 1) / 5);
  let mulOfThree = Math.floor((number - 1) / 3);

  for (let i = 0; i < mulOfFive; i++) {
    setOfMuultiples.add((i + 1) * 5);
  }

  for (let j = 0; j < mulOfThree; j++) {
    setOfMuultiples.add((j + 1) * 3);
  }

  let sumOfmultiples = [...setOfMuultiples].reduce(
    (acl, currentValue) => acl + currentValue,
    0
  );
  return sumOfmultiples;
  // Return the sum of all multiples
}

module.exports = naturalMultiples;
