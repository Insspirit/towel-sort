
// You should implement your task here.

// function towelSort (matrix) {
//   if (!matrix || matrix.length === 0) {
//     return [] //проверим пустой ли массив
//   }
  
//   let result = []

//   for (let i = 0; i < matrix.length; i++)  {
//     if (i % 2 === 0) { // если четная строка
//       result = result.concat(matrix[i])//добавляем эл в конец массива
//     } else {
//       result = result.concat(matrix[i].reverse()) // если нечетное, что развернуть
//     }
//   }
//   return result
// }

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [] //проверим пустой ли массив
  }
  
  let result = []

  for (let i = 0; i < matrix.length; i++)  {
    if (i % 2 === 0) { // если четная строка
      result = result.concat(matrix[i])//добавляем эл в конец массива
    } else {
      result = result.concat(matrix[i].reverse()) // если нечетное, что развернуть
    }
  }
  return result
}
