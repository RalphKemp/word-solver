export const puzzleSolver = (x, y, d) => {
  // so we have the first word, the second word, and all the data.
  // first we have x. we need to split, and replace one of the letters and join to
  // form a new word (b) and make sure that data.includes(b).
  // our array of words which are split.
  const data = d.results.map(x => x.word.split(''));

  // first step. With this function we now have the first pool of words
  // which contain at least 3 letters that are in the same place.
  const poolOne = getPool(x, data, 3);

  // so we have the first pool. Now we compare

  // const poolTwo = getPool(y, poolOne, 3);

  return poolOne;

  // let's think about this.
  // we now have a new pool of words.
  // we need a NEW pool of words, through a function which
  // filters the pool we have to get back words that have at least one of
  // the letters y has.
};

function getPool(firstWord, data, n) {
  const word = firstWord.split('');
  const pool = data.filter(wordArr => {
    return wordArr === compareArrs(word, wordArr, n);
  });
  const newPool = pool.map(arr => arr.join(''));

  return newPool;
}

// does word have 3 letters that appear in data word AND have the same index values? if so, return dataword.
function compareArrs(x, y, n) {
  const arr = x.filter(
    letter => y.includes(letter) && y.indexOf(letter) === x.indexOf(letter)
  );
  return arr.length === n ? y : null;
}
