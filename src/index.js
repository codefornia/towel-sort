module.exports = function towelSort (matrix) {
  const arrSort = [];
 if (matrix === undefined) {
    return arrSort;
  }
  for (var i=0; i<matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }

    for (var j=0; j<matrix[i].length; j++) {
      arrSort.push(matrix[i][j]);
    }
  }
  return arrSort;
}
