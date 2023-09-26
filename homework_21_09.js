function chheckL(text) {
    if (!text) {
    return false;
} else if (/^ *$/.test(text)) {
    return false;
} else if (/^\d/.test(text)) {
    return false;
} else {
    return text === text.toUpperCase()
}
}

console.log(chheckL('Baa'))













function chheck2(text) {
if (/^[A-Z]+$/.test(text)) {
    return true
} else {
    return false
}
}

console.log(chheck2('BB'))


function chheck3(inputString) {
    if (!inputString || !/[a-zA-Z]/.test(inputString)) {
      return false;
    }
    return /^[A-Z]+$/.test(inputString);
}

//the ^^ function allows characters in lowercase [a-zA-Z]+