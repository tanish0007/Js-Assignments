function findMinMax(array) {
    let obj = {
        max : array[0], 
        min : array[0] 
    }
    array.forEach(item => {
        if(item > obj.max)
            obj.max = item;
        if(item < obj.min)
            obj.min = item;
    });
    return obj;
}

let arr = [2, 5, 3, 1, 7, 23, 8];
console.log(findMinMax(arr));