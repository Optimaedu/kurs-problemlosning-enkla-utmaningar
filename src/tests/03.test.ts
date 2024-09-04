import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number) {
  return a % 2 == 0;
}

describe('03', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'isEven(3)', f(3));
  testFunctionResult(data.code, 'isEven(6)', f(6));

  const a = randomInt(50,200);
  testFunctionResult(data.code, 'isEven('+a+')', f(a));
});
