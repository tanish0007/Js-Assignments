function findSecondLarge(arr) {
    let max = arr[0];
    let secondMax = max;

    arr.forEach(item => {
        if(item > max){
            secondMax = max;
            max = item;
        }
        else if(item < max && item > secondMax)
            secondMax = item;
    });
    return secondMax;
}

let array = [1, 2, 6, 33, 29, 5];
console.log("Second Large in array is: ",findSecondLarge(array));