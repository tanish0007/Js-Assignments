function print(array){
    array.forEach(item => console.log(item));
}

function printUsingLoop(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
print(array);
console.log("\n");
printUsingLoop(array);