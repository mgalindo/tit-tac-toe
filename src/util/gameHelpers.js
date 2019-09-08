/*
Assumes the board tiles are numbered like this
0 1 2
3 4 5
6 7 8
*/
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

  const getWinner = values => {
    for (let winComb of winCombinations) {
      const [index1, index2, index3] = winComb;
      if (
        values[index1].trim() !== "" &&
        values[index1] === values[index2] &&
        values[index1] === values[index3]
      ) {
        return values[index1];
      }
    }
    return null;
  };

  export { getWinner };
