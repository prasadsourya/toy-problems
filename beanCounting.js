// returns the frequency count of a letter
function countChar(word, letter) {
    if (letter.length > 1)
        return "only one letter allowed as a second argument."

    var count = 0
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            count += 1
        }
    }
    return count
}

// function to count the number of b's and B's in a given string
function countBs(word) {
    return countChar(word, 'B') + countChar(word, 'b')
}

// Testcases
const str = "Bobby"
const str1 = "bharath"

// printing output
console.log(countBs(str))
console.log(countBs(str1))