import React from "react";
import { MANUFACTURERS } from "../utils/constants";

const LeadSpanDynamic = () => {
  const [iterator, setIterator] = React.useState(0);
  const [titleSpanText, setTitleSpanText] = React.useState("");

  function changeTitleSpanText() {
    let newWord = MANUFACTURERS[iterator];
    let iterations = 0;
    let interval = null;

    interval = setInterval(() => {
      setTitleSpanText(
        newWord
          .split("")
          .map((char, i) => {
            if (i < iterations) return char;

            return titleSpanText[i];
          })
          .join("")
      );

      if (iterations >= newWord.length) {
        clearInterval(interval);
      }
      iterations += 1;
    }, 60);

    setTimeout(() => {
      setTitleSpanText(MANUFACTURERS[iterator]);
      iterator >= MANUFACTURERS.length - 1
        ? setIterator(0)
        : setIterator(iterator + 1);
    }, 1200);
  }

  React.useEffect(() => {
    changeTitleSpanText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iterator]);
  return <span className="lead__span-orange">{titleSpanText}</span>;
};

export default LeadSpanDynamic;
