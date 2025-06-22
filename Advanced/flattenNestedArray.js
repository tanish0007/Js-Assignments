// function flattenTheArray(array){
//     let result = [];

//     array.forEach(item => {
//         if(typeof item === "object")
//             result.push(...flattenTheArray(item));
//         else
//             result.push(item);
//     })
//     return result;
// }

function flattenTheArray(array){
    let i=0;
    while(i < array.length){
        if(typeof array[i] === "object")
            array.splice(i,1, ...array[i]);
        else i++;
    }
    return array;
}

let arr = [1, [2, [3, 4]], 5];
console.log(flattenTheArray(arr));