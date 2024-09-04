import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";

function pickrnd(a: string) {
  return a[Math.floor(a.length* Math.random())];
} 

function rnd() {
  const chars = 'abcdefghijklmnopqrstuvxyz12345667890';
  let s = '';
  for(let i = 0; i < 20; i++)
    s += Math.random() < 0.1 ? ' ' : Math.random() < 0.5 ? pickrnd(chars) : pickrnd(chars).toUpperCase();
  return s;
}

function f(s:string) {
  let temp = '';
  for(let i = 0; i < s.length; i++)
    temp += i % 2 == 0 ? s[i].toUpperCase() : s[i].toLowerCase();
  return temp;
}

describe('13', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, "alternateCase('programmering')", f('programmering'));
  testFunctionResult(data.code, "alternateCase('Hej världen!')", f('Hej världen!'));

  const a = rnd();
  testFunctionResult(data.code, "alternateCase('"+a+"')", f(a));
});
