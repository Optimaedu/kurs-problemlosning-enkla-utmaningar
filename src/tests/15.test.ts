import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";

function pickrnd(a: string) {
  return a[Math.floor(a.length* Math.random())];
} 

function rnd() {
  const chars = 'abcdefghijklmnopqrstuvxyz';
  let s = '';
  for(let i = 0; i < 30; i++)
    s += Math.random() < 0.25 ? ' ' : Math.random() < 0.5 ? pickrnd(chars) : pickrnd(chars).toUpperCase();
  return s;
}

function f(s:string) {
  let temp = s[0].toUpperCase();
  for(let i = 1; i < s.length; i++) {
      temp += (s[i-1] == ' ') ? s[i].toUpperCase() : s[i].toLowerCase();
  }
  return temp;
}

describe('15', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, "capitalizeNames('anna andersson')", f('Anna Andersson'));
  testFunctionResult(data.code, "capitalizeNames('johan svensson')", f('Johan Svensson'));

  const a = rnd();
  testFunctionResult(data.code, "capitalizeNames('"+a+"')", f(a));
});
