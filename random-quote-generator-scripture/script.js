const quoteText = document.querySelector(".quote"),
      authorName = document.querySelector(".name");

// Array of scripture verses and their display times
const quotes = [
  {
    content: "There were three who always walked with the Lord: Mary his mother, her sister, and Magdalene, the one who was called his companion. For 'Mary' is the name of his sister, his mother, and his companion.",
    author: "Gospel according to Philip 63:32-64:5",
    time: 10000 // 10 seconds
  },
  {
    content: "And the companion of the Savior is Mary Magdalene. But Christ loved her more than all the disciples and used to kiss her often on her mouth. The rest of the disciples were offended by it and expressed disapproval. They said to him, 'Why do you love her more than all of us?'",
    author: "Gospel according to Philip 55:13-14",
    time: 20000 // 20 seconds
  },
  {
    content: `When Mary had said this, she fell silent, since it was to this point that the Savior had spoken with her. 
But Andrew answered and said to the brothers, "Say what you think concerning what she has said. 
I, at least, do not believe that the Savior said this. For certainly these teachings are strange ideas."

Peter also opposed her in regard to these matters and asked them about the Savior: 
"Did he really speak with a woman without our knowledge and not openly? Are we to turn about and all listen to her? Did he prefer her to us?"

Then Mary wept and said to Peter, "My brother Peter, what do you think? Do you think that I thought this up myself in my heart, or that I am lying about the Savior?"

Levi answered and said to Peter, "Peter, you have always been hot-tempered. Now I see you contending against the woman like the adversaries. 
But if the Savior made her worthy, who are you indeed to reject her? Surely the Savior knew her very well. That is why he loved her more than us."`,
    author: "Gospel according to Mary Magdalene 9:4-10:14",
    time: 40000 // 40 seconds
  }
];

let currentIndex = 0;

function showQuote() {
  const quote = quotes[currentIndex];
  quoteText.innerText = quote.content;
  authorName.innerText = quote.author;

  // Set up the next quote after its specific time
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % quotes.length; // cycle through quotes
    showQuote(); // show the next one
  }, quote.time);
}

// Start
showQuote();
