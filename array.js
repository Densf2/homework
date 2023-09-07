
//            0       1     2     3       4     5       6
let arr1 = ['kil', 'ooo', 343, 'jdujf', 2390, true, function() {console.log('Hi from array')}]


// let value = arr1[3]
// console.log(value)

arr1[3] = 'New'

// console.log(arr1[3])
// console.log(arr1)

// arr1[6]

// let lArr1 =  arr1.length
// console.log(lArr1)

// console.log(arr1.at(-3))

async function getOnlyStringFromArr(baseArr) {
let result = [];
resultWithUpperC = [];

for (let i = 0; i < baseArr.length; i++) {

    if (typeof baseArr[i] === 'string') {
        await result.push(baseArr[i])
    }    
}

for (let y = 0; y < result.length; y++) {
    let word = result.at(y)
    let firstLetter = await String(word[0]).toUpperCase()
    let restLetters = await String(word.slice(1))
    await resultWithUpperC.push(firstLetter + restLetters) 
}
console.log(resultWithUpperC)
}
getOnlyStringFromArr(arr1)



let mArr22 = [
    [1, 3, 'Shrek'],
    [4, 10],
    [40, 50],
];
let nameShrek = mArr22[0][2]
console.log(nameShrek)

for (let i = 0; i < mArr22.length; i++) {
    let smalArr = mArr22[i];
    for (let y = 0; y < smalArr.length; y++) {
        console.log("all array [" + i + "][" + y +"] = " + smalArr[y])
    }
}
