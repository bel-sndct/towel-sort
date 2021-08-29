
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (arguments.length !== 0) {
        for (let i = 0; i < matrix.length; i++) {
            let j;
            if (i % 2 === 0) {
                j = 0;
                while (j !== matrix[i].length) {
                    arr.push(matrix[i][j]);
                    j++;
                }
            } else {
                j = matrix[i].length - 1;
                while (j >= 0) {
                    arr.push(matrix[i][j]);
                    j--;
                }
            }
        }
    }
    return arr;
}
