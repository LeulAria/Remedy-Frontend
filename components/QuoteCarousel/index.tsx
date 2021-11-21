import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const QuoteCarousel = () => {
  const [randQuote, setRandQuote] = useState(0);
  // TODO: fetch from server
  const quotes = [
    {
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "I kept always two books in my pocket, one to read, one to write in.",
      author: "Robert Louis Stevenson",
    },
    {
      quote: "You can make anything by writing.",
      author: "C.S. Lewis",
    },
    {
      quote: "A word after a word after a word is power.",
      author: "Margaret Atwood",
    },
    {
      quote: "Tears are words that need to be written.",
      author: "Paulo Coelho",
    },
    {
      quote: "To survive, you must tell stories.",
      author: "Umberto Eco, The Island of the Day Before",
    },
    {
      quote: "Always be a poet, even in prose.",
      author: "Charles Baudelaire",
    },
    {
      quote:
        "The purpose of a writer is to keep civilization from destroying itself.",
      author: "Albert Camus",
    },
    {
      quote: "I write to discover what I know.",
      author: "Flannery O'Connor",
    },
    {
      quote: "Writing books is the closest men ever come to childbearing.",
      author: "Norman Mailer",
    },
    {
      quote: "Writers live twice.",
      author: " Natalie Goldberg",
    },
    {
      quote: "Words are a lens to focus one's mind.",
      author: "Ayn Rand",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRandQuote(Math.floor(Math.random() * quotes.length));
    }, 5000);

    () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Box mt={10} maxWidth={500} fontSize=".8rem" color="#AAA">
        "{quotes[randQuote].quote}"
        <br />
        -- {quotes[randQuote].author}
      </Box>
    </div>
  );
};

export default QuoteCarousel;
