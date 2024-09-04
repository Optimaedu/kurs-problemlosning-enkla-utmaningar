import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import randomInt from "./utils/random-int";

function f(numbers: number[]) {
  const arr = [];
  for(let i = 0; i < numbers.length; i++)
    if(arr.indexOf(numbers[i]) < 0)
      arr.push(numbers[i]);
  return arr;
}

function rnd() {
  let a = [];
  for(let i = 0; i < 15; i++) {
    a.push(randomInt(0, 9));
  }
  return a;
}

describe('18', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'removeDuplicates([1, 2, 2, 3, 4, 4, 5])', f([1,2,2,3,4,4,5]));

  const a = rnd();
  testFunctionResult(data.code, 'removeDuplicates(['+a.join(',')+'])', f(a));
});
