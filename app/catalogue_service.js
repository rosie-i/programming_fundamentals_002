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


  let count = 0;

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].toLowerCase().includes(keyword.toLowerCase())) {
      count++; 
    }
  }
  return count
}
  // This now works, yay! I had forgotten to put () after .toLowerCase initially. It's a method rather than just a property, so the parentheses signify that.


function getBooksByAuthor(author) {
  // Loop through the array
  // For each iteration check whether it includes author (if not includes "by " + author)
  // If it does, then filter the entire index to a new array
  // If not then go to next iteration
  // At the end, return the new array

  let booksByAuthor = catalogue.filter(book => book.includes(author))
  
  return booksByAuthor
  /* Problem with this is it will search by any keyword, not just author.
  But think that problem is caused by having items as an array rather than objects*/
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};