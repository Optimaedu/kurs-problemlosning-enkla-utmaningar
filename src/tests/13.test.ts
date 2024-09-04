import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "../tests/utils/test-function-result";

function pickrnd(a: string) {
  return a[Math.floor(a.length* Math.random())];
} 

function f() {
  const chars = 'abcdefghijklmnopqrstuvxyz12345667890';
  let s = '';
  for(let i = 0; i < 10; i++)
    s += Math.random() < 0.5 ? pickrnd(chars) : pickrnd(chars).toUpperCase();
  return s;
}

describe('13', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, "areEqualIgnoreCase('hej', 'HEJ')", 'true');
  testFunctionResult(data.code, "areEqualIgnoreCase('JavaScript', 'Python')", 'false');

  const a = f();
  testFunctionResult(data.code, "areEqualIgnoreCase('"+a+"', '"+a.toLowerCase()+"')", 'true');
  const b = f();
  testFunctionResult(data.code, "areEqualIgnoreCase('"+a+"', '"+b+"')", 'false');
});
