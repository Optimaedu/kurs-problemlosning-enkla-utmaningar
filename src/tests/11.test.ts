import { describe, test } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import { runCode } from "../utils/run-code";

describe('11', function() {
  const data = getStudentfileInfo();

  test('Returnerar true för vokaler', () => {
    const chars = 'aeiouyåäöAEIOUYÅÄÖ';
    for(let i = 0; i < chars.length; i++) {
      const code = data.code + '\n\nvar __COURSE_FUNCTION_RETURN_TEST_VAR=isVowel("'+chars[i]+'")';
      const result = runCode(code, '');
      if(result.error) {
        throw new Error(result.error.short);
      }
      const value = (result.context.__COURSE_FUNCTION_RETURN_TEST_VAR)+'';
      if(value !== 'true') {
        throw new Error('Misslyckades för: isVowel("'+chars[i]+'")\nDu returnerade ' + value);
      }
    }
  });

  test('Returnerar false för konsonanter', () => {
    const chars = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ';
    for(let i = 0; i < chars.length; i++) {
      const code = data.code + '\n\nvar __COURSE_FUNCTION_RETURN_TEST_VAR=isVowel("'+chars[i]+'")';
      const result = runCode(code, '');
      if(result.error) {
        throw new Error(result.error.short);
      }
      const value = (result.context.__COURSE_FUNCTION_RETURN_TEST_VAR)+'';
      if(value !== 'false') {
        throw new Error('Misslyckades för: isVowel("'+chars[i]+'")\nDu returnerade: ' + value);
      }
    }
  });
});
