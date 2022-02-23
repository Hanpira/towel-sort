
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length == 0) {
        return [];
    } else if (Array.isArray(matrix) && matrix.length == 0) {
        return [];
    } else {
        let newMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            let arr = matrix[i];
            if ((i + 1) % 2 == 0) {   // we need to reverse only odd 
                arr = arr.reverse(); 
            }
            newMatrix = newMatrix.concat(arr);
        }
        return newMatrix;
    }
}
