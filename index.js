class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt().toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    const arrayOfWords = string.split(' ')
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arrayOfWords[0] = this.capitalize(arrayOfWords[0])
    const capitalizedWords = arrayOfWords.map(word =>{
      if (excludedWords.indexOf(word) === -1){
        return this.capitalize(word)
      }
      else{
        return word
      }
    })
    return capitalizedWords.join(" ")
  }
}

// the, a, an, but, of, and, for, at, by, and from; first word always capped
const nyan = "the words within the heart are the most important of all"

console.log(Formatter.titleize(nyan))