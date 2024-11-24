var authors = [
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    image: "image_1",
  },
  {
    name: "Frank Zappa",
    quote: "So many books, so little time.",
    image: "image_2",
  },
  {
    name: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
    image: "image_3",
  },
  {
    name: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
    image: "image_4",
  },
  {
    name: "Friedrich Nietzsche",
    quote: "Without music, life would be a mistake.",
    image: "image_5",
  },
  {
    name: "Nikolas Schreck",
    quote: "SILENCE you miserable cretins!.",
    image: "image_6",
  },
  {
    name: "Khaled Hosseini",
    quote: "For you a thousand times over.",
    image: "image_7",
  },
  {
    name: "Tad Williams",
    quote: "General was unsurprised, and raised.",
    image: "image_8",
  },
  {
    name: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
    image: "image_9",
  },
  {
    name: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
    image: "image_10",
  },
];
var usedIndex = -1;
/**
 * function to generate quote text
 * ,Author name, and Author Image
 */
function getQuote() {
  changeBtnText()
  var generatedIndex;
  /*  this loop ensure that no repetation
      keep generating random indices
      if the used and generated indices are the same
      if they are different , exit the loop and display the quotes
  */
  do {
    generatedIndex = Math.floor(Math.random() * authors.length);
  } while (generatedIndex === usedIndex);
  usedIndex = generatedIndex;
  document.getElementById("quote-text").innerText =
    authors[generatedIndex].quote;
  document.getElementById("quote-author").innerText =
    authors[generatedIndex].name;
  document.getElementById(
    "author-image"
  ).src = `./images/${authors[generatedIndex].image}.jpg`;
  document.getElementById("author-image").alt = authors[generatedIndex].image;
}

function changeBtnText () {
  document.getElementById("quote-btn").innerText = "New Quote";
}
