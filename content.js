
var context = document.querySelector("body");
var instance = new Mark(context);
// array of words to highlight
// wordlist
let wordList = [];
console.log(wordList)
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

  // if (request.message) {
    // alert("Message recieved!");
    wordList.push(request.message);
    console.log(wordList);
 })
// });
// wordlist over here
// I need to update the word list as more words are added to 
// the list
// update the list

instance.mark(wordList);

// i know what i want to do.
// here it has to be
// I could onmessage execute script... 
// execute itself? 
// I don't kknow... 
// on message... re run the code

// search the dict. 
// fine. 
// so after we search the dict for the entry we 
// so we're going to filter the array
// except we're not going to modify the existing arr

// search array for a match
// right, each time you update the word that you're searching for 
// we want to update the popup based on the new array that we're filtering
// so filter the array
// only display any that have a match if there isn't a match then append to the 
// popup box word doesn't exist in array append message instead
// as you backspace then do the search
// so a full search has to be done with every new letter that's added to the array
// I want the popup to dynamically update

// step 1
// grab text after each letter in the search box
// so grab value of that box, fine
// next
// filter dict array and 