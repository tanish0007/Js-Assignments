function removeFalsy(array){
    return array.filter((item) => typeof item === "number");
}

let arr = [0, 1, false, 2, '', 3];
console.log(removeFalsy(arr));