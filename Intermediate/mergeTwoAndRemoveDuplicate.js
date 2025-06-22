function removeDuplicate(array) {
    for(let i=0; i<array.length;i++){
        for(let j=0; j<array.length; j++){
            if(array[i] == array[j] && i != j)
                array.splice(j,1);
        }
    }
    return array;
}

function mergeTwoArray(arr1, arr2){
    let arr3=[];
    for(let i=0; i<arr1.length; i++){
        arr3[i] = arr1[i];
    }
    for(let j=0; j<arr2.length; j++){
        arr3[arr1.length+j] = arr2[j];
    }

    arr3 = removeDuplicate(arr3);
    return arr3;
}

let array1 = [1,1,1,2,1,3,2,3,4,2];
let array2 = [10, 4, 6, 2, 1, 3, 5];

console.log(mergeTwoArray(array1,array2));