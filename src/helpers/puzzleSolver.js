export const puzzleSolver = (x, y, d) => {
  // so we have the first word, the second word, and all the data.
  console.log(x, y);
  // first we have x. we need to split, and replace one of the letters and join to
  // form a new word (b) and make sure that data.includes(b).

  // our array of words which are split.
  const data = d.results.map(x => x.word.split(''));


  // swapLetter(x, data);

};

// function swapLetter(x, data) {}




// // our argument is 'head', and we want to recognize 'hear'.

// const data = [['a','r','e','s'], ['h','e','a','r'], ['x','x','v','v']];

// function hasThreeOf(w, i) {
//   return w.filter(x => x !== i).length === 3 ? true : false;
// }

// function swapLetter(x) {
//   const word = x.split('');
//   const pool = data.filter(arr => {
//     return arr.some(z => hasThreeOf(word, z));
//   })
//   return pool
//   // now we have a pool of words that contain atleast some of the letters of word.
//   // we need to find the words that have at least 3 of word letters.
// }
// swapLetter('head');





