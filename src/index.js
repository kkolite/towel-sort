module.exports = function towelSort (matrix) {
  let result = matrix;

  if (matrix === [] || matrix == undefined) {
    return [];
  }
  else {
  for (i = 1; i < result.length; i += 2) {
    result[i].reverse()
  }

  return result.flat()
}
}
