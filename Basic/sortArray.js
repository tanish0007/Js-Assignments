function sort(array, order){
    const isDescending = ['d', 'descending'].includes(order.toLowerCase());
    for (let i = 0; i < array.length - 1; i++) {
        let targetIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (isDescending 
                ? array[j] > array[targetIndex] 
                : array[j] < array[targetIndex]) {
                targetIndex = j;
            }
        }
        if (targetIndex !== i) {
            [array[i], array[targetIndex]] = [array[targetIndex], array[i]];
        }
    }
    return array;
}

let arr = [1, 9, 3, 4, 8, 6, 3, 2, 5];
console.log(sort(arr, 'a'));