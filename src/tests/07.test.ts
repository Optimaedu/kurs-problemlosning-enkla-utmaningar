import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";

function f(a: string) {
  return a.split('').reverse().join('');
}

function rnd() {
  const chars = 'abcdefghijklmnopqrstuvxyzåäö';
  let str = '';
  for(let i = 0; i < 10; i++)
    str += chars[Math.floor(chars.length*Math.random())];
  return str;
}

describe('07', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'reverseString("Hello")', f("Hello"));

  const a = rnd();
  testFunctionResult(data.code, 'reverseString("'+a+'")', f(a));
});
