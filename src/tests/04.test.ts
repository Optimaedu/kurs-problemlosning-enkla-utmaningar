import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number) {
  let n = 0;
  for(let i = 0; i <= a; i++)
    i == 1 ? n = 1 : n *= i;
  return n;
}

describe('04', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'calculateFactorial(0)', f(0));
  testFunctionResult(data.code, 'calculateFactorial(4)', f(4));
  testFunctionResult(data.code, 'calculateFactorial(5)', f(5));

  const a = randomInt(6,20);
  testFunctionResult(data.code, 'calculateFactorial('+a+')', f(a));
});
