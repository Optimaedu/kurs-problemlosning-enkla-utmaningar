import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import randomInt from "./utils/random-int";

function f(numbers: number[]) {
  const largest = numbers.reduce((a,b) => a > b ? a : b);
  let n = 0;
  for(let i = 0; i < numbers.length ; i++) {
    if(n < numbers[i] && numbers[i] < largest)
      n = numbers[i]
  }
  return n;
}

function rnd() {
  let a = [];
  for(let i = Math.floor(Math.random()*5); i < 11; i++) {
    a.push(randomInt(0,100));
  }
  return a;
}

describe('17', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'secondLargest([20, 5, 8, 10])', f([20, 5, 8, 10]));
  testFunctionResult(data.code, 'secondLargest([1, 2, 3, 4, 4])', f([1,2,3,4,4]));

  const a = rnd();
  testFunctionResult(data.code, 'secondLargest(['+a.join(',')+'])', f(a));
});
