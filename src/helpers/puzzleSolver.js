export const puzzleSolver = (x, y, d) => {
  // so we have the first word, the second word, and all the data.
  // first we have x. we need to split, and replace one of the letters and join to
  // form a new word (b) and make sure that data.includes(b).
  // our array of words which are split.
  const data = d.results.map(x => x.word.split(""));
  const pools = [];
  // first step. With this function we now have the first pool of words
  // which contain at least 3 letters that are in the same place. (first ladder place)
  const poolOne = createFirstPool(x, data, y);

  // new pools created from poolOne. (second ladder place)
  const poolTwo = createComparativePool(poolOne, data, y, 3, 1);
  console.log(poolTwo);

  const poolThree = [];
  // for each pool in poolTwo, we run the function again, but this time we need TWO
  // of the letters being the same.
  poolTwo.forEach(pool =>
    poolThree.push(createComparativePool(pool, data, y, 3, 2))
  );

  const poolFour = [];

  poolThree.forEach(p => {
    return p.forEach(pool =>
      poolFour.push(createComparativePool(pool, data, y, 3, 3))
    );
  });

  pools.push(poolOne, poolTwo, poolThree, poolFour);

  return pools;
};

function createFirstPool(firstWord, data, y) {
  const secondWord = y.split("");
  const word = firstWord.split("");
  const pool = data.filter(wordArr => {
    return (
      wordArr === compareArrs(word, wordArr, 3) &&
      !compareArrs(secondWord, wordArr, 1) // we want to return null from compareArrs, not y! so
      // that our first pool has no letters from second word!!
    );
  });
  const newPool = pool.map(arr => arr.join(""));

  return newPool;
}

// Does our word (x) have 3 letters that appear in data word (y) AND have the same index values? if so, return dataword.
// Doesn't work with double letters unless we pass letter index (i) in the function, to get unique character.
function compareArrs(x, y, num) {
  const arr = x.filter(
    (letter, i) =>
      y.includes(letter, i) && y.indexOf(letter) === x.indexOf(letter)
  );

  return arr.length === num ? y : null;
}

function createComparativePool(pool, data, y, num, numTwo) {
  // first pool data.

  const poolData = pool.map(x => x.split(""));
  const secondWord = y.split("");
  const newArrays = [];

  // for each word in our poolOne, we're creating another basic pool of words like in the first
  // function, but in this case for each of the first pool words. then in each new pool we filter
  // out the word arrays which have one letter from our second inputted word, thanks to our compareArrs
  // function.

  poolData.forEach(i => {
    const testing = data
      .filter(x => {
        return x === compareArrs(i, x, num);
      })
      .filter(a => {
        return a === compareArrs(secondWord, a, numTwo);
      });

    return testing.length > 0
      ? newArrays.push(testing.map(x => x.join("")))
      : null;
  });

  return newArrays;
}
