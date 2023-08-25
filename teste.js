const arr = [[11,2,4], [4,5,6], [10,8,-12]];

function diagonalDifference(arr) {
    // Write your code here
    let diag1 = 0;
    let diag2 = 0;
    let j = 0;
    let k = arr.length - 1;
    let = res = 1;

    for(let i = 0; i < arr.length; i++) {
        diag1 += arr[i][j];
        j++;
    }

    for(let i = 0; i < arr.length; i++) {
        diag2 += arr[i][k];
        k--;
    }

    res = diag1 - diag2;
    if(res < 0) {
        res *= -1;
    }

    return res;
}

console.log(diagonalDifference(arr));
