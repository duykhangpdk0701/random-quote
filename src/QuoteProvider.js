import React, { useState, createContext } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
  const [colors, setColors] = useState([
    "#00a8ff",
    "#9c88ff",
    "#fbc531",
    "#4cd137",
    "#487eb0",
    "#e84118",
    "#7f8fa6",
    "#273c75",
    "#0be881",
    "#353b48",
  ]);

  const [quotes, setQuotes] = useState([
    "But man is not made for defeat. A man can be destroyed but not defeated.",
    "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "There is nothing permanent except change.",
    "You cannot shake hands with a clenched fist.",
    "Let us sacrifice our today so that our children can have a better tomorrow.",
    "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    "Life without love is like a tree without blossoms or fruit.",
    "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
    "No act of kindness, no matter how small, is ever wasted.",
  ]);

  const [authors, setAuthors] = useState([
    "Ernest Hemingway",
    "John Keats",
    "Franklin D. Roosevelt",
    "Heraclitus",
    "Indira Gandhi",
    "A. P. J. Abdul Kalam",
    "Amelia Earhart",
    "Khalil Gibran",
    "William Blake",
    "Aesop",
  ]);

  return (
    <QuoteContext.Provider
      color={[colors, setColors]}
      quote={[quotes, setQuotes]}
      author={[authors, setAuthors]}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};
