// Question 1
const isUpperCase = (string) => {
  if(string.toUpperCase() === string){
    return true
  } else {
    return false
  }
};

// Question 2
const removeVowels = (arr) => {
  const results = [];
  const nonVowelRegex = /[^aeiou]/gi;
  for(let i = 0; i < arr.length; i++){
    let str = '';
   for(let j = 0; j < arr[i].length; j++){
    if(arr[i][j].match(nonVowelRegex)){
      str += arr[i][j]
    }
   }
   results.push(str)
  } 
  return results;
};

// Question 3
const wordCap = (str) => {
  return str.toLowerCase().split(' ').map(d => d[0].toUpperCase() + d.slice(1)).join(' ');
};

// Question 4
const swapCase = (str) => {
  let newStr = str;
  let output = '';
 for(let i = 0; i < newStr.length; i++){
    if(newStr[i] === newStr[i].toUpperCase()){
     // console.log(newStr[i].toLowerCase(), newStr[i])
      output += newStr[i].toLowerCase()
    } else if(newStr[i] === newStr[i].toLowerCase()) { 
      output += newStr[i].toUpperCase()
    }
 }
 return output

};

// Question 5
const staggeredCase = (str) => {
  let newStr = "";
  let shouldUpper = true;
 for(let i = 0; i < str.length; i++){
   if(/[a-zA-z]/.test(str[i])) {
     if(shouldUpper){
       newStr += str[i].toUpperCase();
       shouldUpper = false
     }else{
       newStr += str[i].toLowerCase();
       shouldUpper = true
     }
   }else{
       newStr += str[i]
     }
   }
   return newStr
};

// Question 6
const wordLengths = (str) => {
  if(!str){
    return [];
  }
  let word = str.split(' ');
  let result = [];
  for(let i = 0; i < word.length; i++){
    if(word[i].match(/[a-z]/gi)){
      result.push(word[i] + " " + word[i].length);
    }
  }
  return result;
};

// Question 7
const searchWord = (word, text) => {
  return text.replace(/[.!?,]/ig, "").split(" ").filter(w => w.toLowerCase() === word.toLowerCase()).length
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
