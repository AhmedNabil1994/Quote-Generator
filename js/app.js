var quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    image: "image_1",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
    image: "image_2",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
    image: "image_3",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
    image: "image_4",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "Without music, life would be a mistake.",
    image: "image_5",
  },
  {
    author: "Nikolas Schreck",
    quote: "SILENCE you miserable cretins!.",
    image: "image_6",
  },
];

var usedIndex = -1;
/**
  * function to generate quote text
  * ,Author name, and Author Image 
*/
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
  document.getElementById(
    "author-image"
  ).src = `./images/${quotes[generatedIndex].image}.jpg`;
  document.getElementById("author-image").alt = quotes[generatedIndex].image;
}


