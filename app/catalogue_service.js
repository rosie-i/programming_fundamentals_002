// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length
}

function checkBook(book) {
  return catalogue.includes(book)
}

function countBooksByFirstLetter(letter) {
  // Loop through the array
  // For each item, check if catalogue[i].charAt(0) = letter
  // If true +1 to count
  // If false, do nothing
  // Repeat with each index
  // Return the count

  let count = 0;

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].charAt(0) === letter) {
      count++;
    }
  }
  return count
}

function countBooksByKeyword(keyword) {
  // Loop through the array
  // For each item, check if the keyword is included
  // If yes, +1 to count
  // Notes to consider:
  // What if the keyword is included in the same title twice? e.g. 'Be'
  // Will capitalisation affect the search? (can use .toLowerCase?)

  // This does work when I run it in repl but the problem is definitely to do with capitalisation

  let count = 0;

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].includes(keyword)) {
      count++;
    }
  }
  return count
}

function getBooksByAuthor(author) {
  // Your code here
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};