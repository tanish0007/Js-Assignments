function removeDuplicate(array) {
    for(let i=0; i<array.length;i++){
        for(let j=0; j<array.length; j++){
            if(array[i] == array[j] && i != j)
                array.splice(j,1);
        }
    }
    return array;
}

function filterArray(array, value){
    array = removeDuplicate(array);
    return array.filter(item => item > value);
}

let A = [8, 3, 7, 3, 8, 9, 3, 2];
console.log(filterArray(A,6));