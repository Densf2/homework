let num215 = 215

if (num215 == 215) {
    console.log('yes. value under condition')
    console.log('1')
    console.log('2')
}

if (num215 >= 215 && num215 < 250) {
    console.log('Second condition works')
}

if (num215 > 300) {
    console.log('num215 varaible greater than 300')
} else {
    console.log('code goes to the else')
}

if (Number.isInteger(num215)) {
    console.log('num is number')
}

if (num215 > 300) {
    console.log('num215 varaible greater than 300')
} else if (num215 >= 250) {
    console.log('num greater than 250')
} else if (num215 >= 200) {
    console.log('num greater than 200')
} else {
    console.log('code goes to the else')
}

// ternary operator
            let resTernary = (num215 >= 200) ? 'ternary true' :
              (num215 >= 250) ? 'ternary num greater than 250' :
              'ternary false'
              console.log(resTernary)

let val2 = 'txt'

if (val2 == 'New York') {
    // action
}