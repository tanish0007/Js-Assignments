function removeDuplicate(array) {
    for(let i=0; i<array.length;i++){
        for(let j=0; j<array.length; j++){
            if(array[i] == array[j] && i != j)
                array.splice(j,1);
        }
    }
    return array;
}

let arr = [1,1,1,2,1,3,2,3,4,2];
console.log(removeDuplicate(arr));