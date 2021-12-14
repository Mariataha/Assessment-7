// 1) Sum Zero: Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.


function sumOfZero(arr) {
    let answer = [];
    for (let i=0; i<arr.length; i++) {
        for (let x=0; x<arr.length; x++) {
            if (arr[i]+arr[x]===0) {
            answer.push(arr[i])
             } (answer.length>0) 
            return true
        }
    } return false
}
console.log(sumOfZero([-1, 1]))  
//I think the runtime of sumOfZero solution is 0(n^2). 
// The space complexity of sumOfZero is 0(n^2) because the length of the string grows and the memory that is needed to hold it will grow in a linear way.


//2) Unique Characters: Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str) {
    for (char in str) {
            if (str.indexOf(str[char]) != str.lastIndexOf(str[char])){
                return false
            }
    }
    return true
}
    hasUniqueChars('Monday')   
    //I believe the solution runtime is 0(n)
    // The space complexity of hasUniqueChars is 0(n) because the length of the string that is an array of characters grows, the memory storage required will grow in a linear way




// 3) Panagram Sentence

function panagramSentence(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
for(letter in alphabet) {
    if(!str.includes(alphabet[letter])){
        return false
    }
    } return true 
    }               
    //I believe panagramSentence's runtime will be 0(n).
    // The space complexity of panagramSentence is 0(n) because as the length of the string grows larger, the memory required to store it will also grow in a linear style



    // 4) Longest Word: Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

    function find_longest_word(arr){
        const longestWord = ""
        for(word in arr){
            if (arr[word].length > word.length){
                longestWord = arr[word]
            }
        } return longestWord
    }

//I belive the runtime of find_longest_word is 0(n).
// The space complexity of find_longest_word is 0(n) because as the length of the array increases, the memory needed to store it will also show linear growth 