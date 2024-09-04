import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number) {
  const arr = [0,1];
  for(let i = 3; i <= a; i++) {
    arr.push(arr[i-3] + arr[i-2]);
  }
  return arr;
}

describe('06', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'fibonacciSequence(4)', f(4));
  testFunctionResult(data.code, 'fibonacciSequence(7)', f(7));

  const a = randomInt(8,17);
  testFunctionResult(data.code, 'fibonacciSequence('+a+')', f(a));
});
