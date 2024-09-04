import { describe, test } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import { runCode } from "../utils/run-code";

describe('19', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'findMissingNumber([1,2,3,5])', 4);

  test('Testar flera olika arrays..', () => {
    for(let i = 0; i < 20; i++) {
      const a =[1,2,3,4,5,6,7,8,9,10];
      const b = a.splice(1+Math.floor((a.length-2) * Math.random()),1)[0];

      const code = data.code + '\n\nvar __COURSE_FUNCTION_RETURN_TEST_VAR=findMissingNumber(['+a.join(',')+'])';
      const result = runCode(code, '');
      if(result.error) {
        throw new Error(result.error.short);
      }
      const value = (result.context.__COURSE_FUNCTION_RETURN_TEST_VAR)+'';
      if(value !== b.toString()) {
        throw new Error('Misslyckades för:\nfindMissingNumber(['+a.join(',')+'])\nDu returnerade: ' + value + '\nKorrekt är: ' + b);
      }
    }
  });
});
