import { describe } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import randomInt from "./utils/random-int";

function f(a: number[]) {
  return a.reduce((x,y) => Math.max(x,y));
}

function rnd() {
  let a = [];
  for(let i = Math.floor(Math.random()*5); i < 11; i++) {
    a.push(randomInt(0,100));
  }
  return a;
}

describe('09', function() {
  const data = getStudentfileInfo();

  testFunctionResult(data.code, 'findLargestNumber([3, 5, 8, 2, 7])', f([3, 5, 8, 2, 7]));

  const a = rnd();
  testFunctionResult(data.code, 'findLargestNumber(['+a.join(',')+'])', f(a));
});
