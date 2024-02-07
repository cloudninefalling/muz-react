import React from "react";

const guitarBrands = ["fender", "gibson", "ibanez", "yamaha"];

export default function Lead() {
  const [iterator, setIterator] = React.useState(0);
  const [titleSpanText, setTitleSpanText] = React.useState("");

  function changeTitleSpanText() {
    let newWord = guitarBrands[iterator];
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
      setTitleSpanText(guitarBrands[iterator]);
      iterator >= guitarBrands.length - 1
        ? setIterator(0)
        : setIterator(iterator + 1);
    }, 1200);
  }

  React.useEffect(() => {
    changeTitleSpanText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iterator]);

  return (
    <section className="lead">
      <h1 className="lead__title">
        explore &amp;&nbsp;find your{" "}
        <span className="lead__span-orange">{titleSpanText}</span>
      </h1>
      <p className="lead__subtitle">make some noise</p>
      <button className="lead__button" aria-label="button">
        <div className="lead__explore"></div>
        <div className="lead__arrow"></div>
      </button>
    </section>
  );
}
