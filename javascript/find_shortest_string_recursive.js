function findShortestStringRecursive(arr, shortWord = "iiiiiiiiiiiiiii") {
  let result = arr.splice(0,1)[0]
  //console.log(shortWord, result, arr.length)
  if (result.length < shortWord.length) { shortWord = result} 
  if (arr.length === 0) { return shortWord }
  return findShortestStringRecursive(arr, shortWord)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
