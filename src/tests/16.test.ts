import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number[]) {
  return (a.reduce((x,y) => x+y))/a.length;
}

function rnd() {
  let a = [];
  for(let i = Math.floor(Math.random()*5); i < 11; i++) {
    a.push(randomInt(0,100));
  }
  return a;
}

describe('16', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'calculateAverage([2, 4, 6, 8])', f([2, 4, 6, 8]));

  const a = rnd();
  testFunctionResult(data.code, 'calculateAverage(['+a.join(',')+'])', f(a));
});
