function removeDuplicate(array) {
    for(let i=0; i<array.length;i++){
        for(let j=0; j<array.length; j++){
            if(array[i] == array[j] && i != j)
                array.splice(j,1);
        }
    }
    return array;
}

function filterArray(a, value) {
    array = removeDuplicate(a);
    let arr = array.filter(item => {
        if(item > value)
            return item;
    })
    // return new Set(arr);     can use if want
    return (arr);
}

let A = [8, 3, 7, 3, 2, 8, 9, 3, 2];
console.log(filterArray(A, 5));