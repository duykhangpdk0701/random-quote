import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const colors = [
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
];

const quote = [
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
];

const author = [
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
];

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: Math.floor(Math.random() * 10),
    };
  }

  render() {
    const TweetURL =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(
        '"' + quote[this.state.choice] + '" ' + author[this.state.choice]
      );

    const change = (event) => {
      const preChoice = this.state.choice;
      let randomNum = Math.floor(Math.random() * 10);
      //check for the same number after to click
      while (randomNum === preChoice) {
        randomNum = Math.floor(Math.random() * 10);
      }
      this.setState({
        choice: randomNum,
      });
    };

    const background = {
      backgroundColor: colors[this.state.choice],
    };

    const color = {
      color: colors[this.state.choice],
    };

    const animateText = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });

    return (
      <div id="quote-box">
        <animated.div
          id="text"
          style={(color, { opacity: animateText.opacity })}
        >
          <i class="fas fa-quote-left comma"></i>
          <span>{quote[this.state.choice]}</span>
        </animated.div>
        <div id="author">
          <span>{"--" + author[this.state.choice] + "--"}</span>
        </div>
        <div className="button-container">
          <div className="share-btns">
            <a
              style={background}
              href={TweetURL}
              id="tweet-quote"
              className="tweet-btn"
              onClick={this.shareTwitter}
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a style={background} href="" className="tumblr-btn">
              <i class="fab fa-tumblr"></i>
            </a>
          </div>
          <button
            style={background}
            className="new-quote-btn"
            id="new-quote"
            onClick={change}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
