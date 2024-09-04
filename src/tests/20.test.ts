import { describe, test } from "mocha";
import { getStudentfileInfo } from "../utils/student-file-info";
import testFunctionResult from "./utils/test-function-result";
import { runCode } from "../utils/run-code";
import randomInt from "./utils/random-int";

const anagrams = [
  'bard',
  'brad',
  'drab',

  'beard',
  'bread',
  'debar',

  'barely',
  'barley',
  'bleary',

  'bats',
  'stab',
  'tabs',

  'begin',
  'being',
  'binge',

  'below',
  'bowel',
  'elbow',

  'bleats',
  'stable',
  'tables',

  'bluest',
  'bustle',
  'subtle',

  'bores',
  'robes',
  'sober',

  'brag',
  'garb',
  'grab'
]

describe('20', function() {
  const data = getStudentfileInfo();

  test('Testar för anagram', () => {
    for(let i = 0; i < 20; i++) {
      const j = randomInt(0, 9) * 3;
      const k = randomInt(1,2);

      const code = data.code + '\n\nvar __COURSE_FUNCTION_RETURN_TEST_VAR=areAnagrams("'+anagrams[j]+'","'+anagrams[j+k]+'")';
      const result = runCode(code, '');
      if(result.error) {
        throw new Error(result.error.short);
      }
      const value = (result.context.__COURSE_FUNCTION_RETURN_TEST_VAR)+'';
      if(value !== 'true') {
        throw new Error('Misslyckades för:areAnagrams("'+anagrams[j]+'","'+anagrams[j+k]+'")\nDu returnerade: ' + value + '\nKorrekt är: true');
      }
    }
  });
  
  test('Testar för icke anagram', () => {
    for(let i = 0; i < 20; i++) {
      const j = randomInt(0, 8) * 3;
      const k = randomInt(1,2) + 3;

      const code = data.code + '\n\nvar __COURSE_FUNCTION_RETURN_TEST_VAR=areAnagrams("'+anagrams[j]+'","'+anagrams[j+k]+'")';
      const result = runCode(code, '');
      if(result.error) {
        throw new Error(result.error.short);
      }
      const value = (result.context.__COURSE_FUNCTION_RETURN_TEST_VAR)+'';
      if(value !== 'false') {
        throw new Error('Misslyckades för:areAnagrams("'+anagrams[j]+'","'+anagrams[j+k]+'")\nDu returnerade: ' + value + '\nKorrekt är: false');
      }
    }
  });
});
