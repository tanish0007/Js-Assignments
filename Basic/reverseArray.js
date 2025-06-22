function reverse(array){
    let start = 0;
    let end = array.length - 1;
    while(start < end){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(arr));