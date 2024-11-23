var quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "Without music, life would be a mistake.",
  },
  {
    author: " Nikolas Schreck",
    quote: "SILENCE you miserable cretins!.",
  },
];

var usedIndex = -1;
console.log(quotes.length);

function getQuote() {
  var generatedIndex;
  /*  this loop ensure that no repetation
      keep generating random indices
      if the used and generated indices are the same
      if they are different , exit the loop and display the quotes
    */
  do {
    generatedIndex = Math.floor(Math.random() * quotes.length);
  } while (generatedIndex === usedIndex);
  usedIndex = generatedIndex;
  document.getElementById("quote-text").innerText =
    quotes[generatedIndex].quote;
  document.getElementById("quote-author").innerText =
    quotes[generatedIndex].author;
}
