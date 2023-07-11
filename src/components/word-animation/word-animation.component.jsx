import { Letter } from "./word-animation.styles";
import { useState, useEffect } from "react";

import React from "react";

const WordAnimation = ({ char, id }) => {
  const density = "@abcdefghijklmnopqrstuvwxyz";
  const [hover, setHover] = useState(false);
  const [roll, setRoll] = useState(false);

  var [letter, setLetter] = useState(char);

  var ind = 0;

  useEffect(() => {
    setTimeout(HandleHover, id * 45);
  }, []);

  function HandleHover() {
    setHover(true);
    if (density[ind] === char) {
      setLetter(density[ind]);
      setRoll(false);
    }
    if (
      !roll &&
      ind < density.length &&
      density[ind] !== char &&
      char !== " "
    ) {
      setLetter(density[ind]);
      ind++;
      setTimeout(HandleHover, 60);
      setRoll(true);
    }
  }

  function HandleAnimeitonEnd() {
    setHover(false);
  }

  return (
    <Letter
      onMouseOver={() => HandleHover()}
      onAnimationEnd={() => HandleAnimeitonEnd()}
      hover={hover}
    >
      {letter}
    </Letter>
  );
};

export default WordAnimation;
