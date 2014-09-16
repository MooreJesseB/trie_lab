
Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  if (index === undefined){
    index = 0;
  } 
  if (index < word.length) {
    var letter = word[index];
    if (this.characters[letter] === undefined) {
      // create new Trie
      this.characters[letter] = new Trie();
    } 
      // move on through new or existing Trie
      index++;
      this.characters[letter].learn(word, index);
  } else {

    // end of word
    // this.isWord = true;
    this.isWord = true;
  }
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.
};

Trie.prototype.getWords = function(words, currentWord) {
  
  // if (words === undefined) {
  //   words = [];
  // }

  // if (currentWord === undefined) {
  //   currentWord = "";
  // }

  currentWord = currentWord || "";
  words = words || [];

  if (this.isWord) {
    words.push(currentWord);
  }

  for (var key in this.characters) {
    var nextWord = currentWord + key;
    this.characters[key].getWords(words, nextWord);
  }

  return words;


  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index){
  if (word.length === 0 || word === undefined || index < 0) {
    return false;
  }

  if (index === undefined) {
    index = 0;
  }

  var letter = word[index];

  if (this.characters[letter] === undefined) {
    return false;
  } else {

    if (index < word.length - 1) {
      index++;
      return this.characters[letter].find(word, index);
    } else if (index === word.length - 1) {
      return this.characters[letter];
    } else {
      return false;      
    }   
  }

  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  word = this.find(prefix);

  if (word) {
    return word.getWords([], prefix);
  } else {
    return [];
  }
  
  // words.forEach(function(word))
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};

try{
  module.exports = Trie;
} catch(e){

}