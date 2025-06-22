function areEqual (arr1, arr2) {
    if(arr1.length != arr2.length) return false;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

array1 = [1, 3, 5, 5, 7];
array2 = [1, 3, 5, '5', 7];

console.log(areEqual(array1, array2))