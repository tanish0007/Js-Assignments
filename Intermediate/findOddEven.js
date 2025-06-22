function findOddEven(array){
    let evenCount = 0;
    let oddCount = 0;
    for(let i=0; i<array.length; i++){
        if(i % 2 == 0)
            evenCount++;
        else 
            oddCount++;
    }
    return obj = {
        even : evenCount,
        odd : oddCount
    }
}

let arr = [12, 45, 13, 2, 87, 34, 99];
console.log(findOddEven(arr));