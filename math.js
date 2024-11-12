function addNumbers(num1, num2) {
  return num1 + num2;
}

function factorial(num) {
  /*
    3! = 1 * 2 * 3
    5! = 1 * 2 * 3 * 4 * 5
  */
  let ans = 1;
  for (i = 1; i < num; i++) {
    ans = ans * i;
  }
  return ans;
}

module.exports = { addNumbers, factorial };
