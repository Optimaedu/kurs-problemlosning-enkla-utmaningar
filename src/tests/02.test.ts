import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number, b: number) {
  return a > b ? a : b;
}

describe('02', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'maxOfTwoNumbers(5, 9)', f(5,9));
  testFunctionResult(data.code, 'maxOfTwoNumbers(11, 7)', f(11,7));

  const a = randomInt(50,200);
  const b = randomInt(50,200);
  testFunctionResult(data.code, 'maxOfTwoNumbers('+a+', '+b+')', f(a,b));
});
