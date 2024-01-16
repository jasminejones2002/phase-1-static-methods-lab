class Formatter {
  static capitalize(string) {
    if (string.length === 0) {
      return string;
    }
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}