const palindromeCheck = (str) => {
    // is a string a palindrome or not?
    // first remove any unwanted characters
    // special characters?
    // split the str into individual letters
    let reversedStr = str.split('').reverse().join('') // test each one first then string together
    // join letters back together as a single string
    // check if original string matches the reversed string
    console.log(str)
    console.log(reversedStr)

    return (str === reversedStr) 
}

// test cases
console.log('check palindrome true: ', palindromeCheck('ana') === true)
console.log('check spaces do not affect palindrome: ', palindromeCheck('an a') === true)
console.log('return false if not palindrome: ', palindromeCheck('banana') === false)
console.log('special characters: ', palindromeCheck('a#a') === true) // edge case, should this pass?
console.log('special characters: ', palindromeCheck('a!#a') === false) // edge case, should this ignore special characters and pass?


// study unit and integration tests