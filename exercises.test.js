const exercise = require('./exercises.js');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/

test('Question 1: isUpperCase', () => {
  expect(exercise.isUpperCase('t')).toEqual(false)
  expect(exercise.isUpperCase('T')).toEqual(true)
  expect(exercise.isUpperCase('Four Score')).toEqual(false)
  expect(exercise.isUpperCase('FOUR SCORE')).toEqual(true)
  expect(exercise.isUpperCase('4SCORE!')).toEqual(true)
  expect(exercise.isUpperCase('')).toEqual(true)
});

test('Question 2: removeVowels', () => {
  expect(exercise.removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(['bcdfghjklmnpqrstvwxyz'])
  expect(exercise.removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"])
  expect(exercise.removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"])
});

test('Question 3: wordCap', () => {
  expect(exercise.wordCap('four score and seven')).toEqual("Four Score And Seven")
  expect(exercise.wordCap('the javaScript language')).toEqual("The Javascript Language")
  expect(exercise.wordCap('this is a "quoted" word')).toEqual('This Is A "quoted" Word')
});

test('Question 4: swapCase', () => {
  expect(exercise.swapCase('CamelCase')).toEqual("cAMELcASE")
  expect(exercise.swapCase('Tonight on XYZ-TV')).toEqual( "tONIGHT ON xyz-tv")
});

test('Question 5: staggeredCase', () => {
  expect(exercise.staggeredCase('I Love Launch School!')).toEqual("I lOvE lAuNcH sChOoL!")
  expect(exercise.staggeredCase('ALL CAPS')).toEqual("AlL cApS")
  expect(exercise.staggeredCase('ignore 77 the 444 numbers')).toEqual("IgNoRe 77 ThE 444 nUmBeRs")
});

test('Question 6: wordLengths', () => {
  expect(exercise.wordLengths('cow sheep chicken')).toEqual(["cow 3", "sheep 5", "chicken 7"])
  expect(exercise.wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"])
  expect(exercise.wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"])
  expect(exercise.wordLengths('Supercalifragilisticexpialidocious')).toEqual(["Supercalifragilisticexpialidocious 34"])
  expect(exercise.wordLengths('')).toEqual([])
});

test('Question 7: searchWord', () => {
  let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';

  expect(exercise.searchWord('his', text)).toEqual(4)
  expect(exercise.searchWord('hip-hop', text)).toEqual(1)
  expect(exercise.searchWord('flow', text)).toEqual(1)
  expect(exercise.searchWord('is', text)).toEqual(1)

})