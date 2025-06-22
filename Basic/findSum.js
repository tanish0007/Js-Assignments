function sum(array) {
    return array.reduce((acc, cur) => acc+cur, 0);
}

let arr = [1, 2, 3, 6, 54, 32, 523];
console.log(sum(arr));