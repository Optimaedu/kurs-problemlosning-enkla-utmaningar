import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number[]) {
  return a.reduce((x,y) => x+y);
}

function rnd() {
  let a = [];
  for(let i = Math.floor(Math.random()*5); i < 11; i++) {
    a.push(randomInt(0,100));
  }
  return a;
}

describe('10', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'sumOfElements([1,2,3,4,5])', f([1,2,3,4,5]));

  const a = rnd();
  testFunctionResult(data.code, 'sumOfElements(['+a.join(',')+'])', f(a));
});
