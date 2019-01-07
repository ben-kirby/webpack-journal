// number of words in the entry. Then, add a separate method (or methods) to return the number of vowels and consonants in each entry.



class Entry {
  constructor(post) {
    this.title = post.title;
    this.body = post.body;

  }

  numOfWord() {
    const firstEight = this.body.split(" ").slice(0, 8).join(" ");

    return {total: this.body.split(" ").length, firstEight};
  }

  vowelsAndConsonants() {
    const vowelsDict = ['a','e','i','o','u'];
    const cleanBody = this.body.match(/\w/g);
    let vowelsCount = 0;
    let consonantsCount = 0;

    cleanBody.forEach(function(letter){
        if (vowelsDict.includes(letter)) {
        vowelsCount++;
      }
      consonantsCount = cleanBody.length - vowelsCount;
    });
    return {vowelsCount, consonantsCount}
  }
}

export { Entry };
