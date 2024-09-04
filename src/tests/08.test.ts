import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";

function f(a: string) {
  return a.toLowerCase() == a.toLowerCase().split('').reverse().join('');
}

function rnd(palindrome: boolean) {
  const chars = 'abcdefghijklmnopqrstuvxyzåäö';
  let str = '';
  for(let i = palindrome ? 5 : 1; i < 10; i++)
    str += chars[Math.floor(chars.length*Math.random())];
  if(palindrome)
    str += str.split('').reverse().join('');
  str = str.split('').map(v => Math.random() < 0.25 ? v.toUpperCase() : v).join('');
  return str;
}

describe('08', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'isPalindrome("hello")', f("hello"));
  testFunctionResult(data.code, 'isPalindrome("radar")', f("radar"));

  const b = rnd(false);
  testFunctionResult(data.code, 'isPalindrome("'+b+'")', f(b));
  const a = rnd(true);
  testFunctionResult(data.code, 'isPalindrome("'+a+'")', f(a));
});
