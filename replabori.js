const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = Array.prototype.flat.call(arrays);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
