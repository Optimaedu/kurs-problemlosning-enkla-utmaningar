import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number, b: number) {
  return a+b;
}

describe('01', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'sumOfTwoNumbers(1, 2)', f(1,2));
  testFunctionResult(data.code, 'sumOfTwoNumbers(13, 25)', f(13,25));

  const a = randomInt(50,200);
  const b = randomInt(50,200);
  testFunctionResult(data.code, 'sumOfTwoNumbers('+a+', '+b+')', f(a,b));
});
