import { describe, test } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import { runCode } from "../utils/run-code";
import testFunctionResult from "./utils/test-function-result";

function rnd() {
  const chars = 'abcdefghijklmnopqrstuvxyzåäö';
  let str = '';
  for(let i = 0; i < 15; i++){
    const char = chars[Math.floor(chars.length*Math.random())];
    str += Math.random() < 0.15 ? ' ' : Math.random() < 0.5 ? char : char.toUpperCase();
  }
  return str;
}

function f(text: string) {
  const vowels = 'aeiouyåäö';
  let count = 0;
  for(let i = 0; i < text.length; i++)
    count += vowels.indexOf(text[i].toLocaleLowerCase()) >= 0 ? 1 : 0;
  return count;
}

describe('12', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'countVowels("Hello World!")', '3');

  test('Returnerar korrekt antal vokaler för olika strängar', () => {
    for(let i = 0; i < 20; i++) {
      const text = rnd();
      const code = data.code + '\n\nvar __COURSE_FUNCTION_RETURN_TEST_VAR=countVowels("'+text+'")';
      const result = runCode(code, '');
      if(result.error) {
        throw new Error(result.error.short);
      }
      const value = (result.context.__COURSE_FUNCTION_RETURN_TEST_VAR)+'';
      if(value !== f(text).toString()) {
        throw new Error('Misslyckades för: countVowels("'+text+'")\nDu returnerade: ' + value + '\nKorrekt är: ' + f(text));
      }
    }
  });
});
