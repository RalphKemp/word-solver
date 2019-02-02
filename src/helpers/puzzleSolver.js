export const puzzleSolver = (x, y, d) => {
  // so we have the first word, the second word, and all the data.
  // first we have x. we need to split, and replace one of the letters and join to
  // form a new word (b) and make sure that data.includes(b).
  // our array of words which are split.
  const data = d.results.map(x => x.word.split(""));

  return swapLetter(x, data);
};

function swapLetter(firstWord, data) {
  const word = firstWord.split("");
  const pool = data.filter(wordArr => {
    return wordArr === compareArrs(word, wordArr);
  });
  const firstPool = pool.map(arr => arr.join(""));

  // getting a pool of words that contain at least 3 letters of the word that's been inputted (x);
  console.log(firstPool);
  return firstPool;
  // now from this pool we need to check that the position of three letters that DO appear in
  // that word are in the same place.
}

// does word have 3 letters that appear in data word? if so, return dataword.
function compareArrs(x, y) {
  const arr = x.filter(letter => y.includes(letter));
  return arr.length === 3 ? y : null;
}
