/**
 * WordLadder Object
 * @constructor
 */
function WordLadder() {}

/**
 * Constant dictionary of words to test basic ladder.
 * @type {string[]}
 */
WordLadder.prototype.dictionary = ["code", "lode", "love", "live", "nick", "read", "loop", "rite", "same", "four"];

/**
 * Does a shallow copy of an array and returns a new array
 * @param arr
 * @returns {Array}
 */
WordLadder.prototype.copyLadder = function(arr) {
	return arr.map(function(item) {
		return item;
	}, []);
};

/**
 * Returns a set of valid words (checked against the WordLadder.prototype.dictionary)
 * which differ by only a letter from the passed in word.
 * @param word
 * @returns {Array}
 */
WordLadder.prototype.findWords = function(word) {
	var i, ch, candidate, cleanWord = word.toLowerCase().trim(), res = [];

	for(i = 0; i < word.length; i += 1) {
		for(ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch += 1) {
			candidate = cleanWord.substring(0, i) + String.fromCharCode(ch) + cleanWord.substring(i + 1);
			if(this.dictionary.indexOf(candidate) > -1 && candidate !== word && res.indexOf(candidate) === -1) {
				res.push(candidate);
			}
		}
	}
	return res;
};

/**
 * Creates a word ladder based on a breadth first search methodology.
 * Methodology:
 * 1. Set the initial ladder to contain only the start word
 * 2. Push initial ladder onto the queue
 * 3. While the queue is not empty
 * 		4. Dequeue the first ladder
 * 		5. If the final word in the ladder is the endWord, then return the ladder
 * 		6. For every word in the English language that differs by only a letter
 * 			7. If that word has not been used already
 * 				8. Get a copy of the current ladder
 * 				9. Add the new word to the copied ladder
 * 				10. Add the new word to the list of used words
 * 				11. Add the copied ladder to the queue
 * 	12. return false (end of function which means we weren't able to find a ladder from startWord to endWord)
 * @param startWord
 * @param endWord
 * @returns {Array}
 */
WordLadder.prototype.getLadder = function(startWord, endWord) {
	var i, ladderLastIndex, successors, ladder = [], extendedLadder = [], queue = [], usedWords = [];
	// start with a ladder of one word
	ladder[0] = startWord;
	queue.unshift(ladder);

	while(queue.length !== 0) {
		ladder = queue.shift();
		ladderLastIndex = ladder.length - 1;
		console.log(ladder);

		if(ladder[ladderLastIndex] === endWord) {
			return ladder;
		}

		successors = this.findWords(ladder[ladderLastIndex]);

		for(i = 0; i < successors.length; i += 1) {
			if(usedWords.indexOf(successors[i]) === -1) {
				extendedLadder = this.copyLadder(ladder);
				extendedLadder.push(successors[i]);
				usedWords.push(successors[i]);
				queue.unshift(extendedLadder);
			}
		}
	}
	return false;
};

// Usage
//var word = new WordLadder();
//var ladder = word.getLadder("code", "live");

