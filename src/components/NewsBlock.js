export default function NewsBlock({ isSquare, imgSrc, text }) {
  return (
    <a
      className={`news-block ${
        isSquare ? "news-block_type_square" : "news-block_type_rect"
      }`}
      href="/"
      // todo re-route to 404
    >
      <img
        className={
          isSquare ? "news-block__image-square" : "news-block__image-rect"
        }
        src={imgSrc}
        alt={text}
      />
      {isSquare ? <p className="news-block__subtitle">article</p> : ""}
      <h3
        className={
          isSquare ? "news-block__title-square" : "news-block__title-rect"
        }
      >
        {text}
      </h3>
      {!isSquare ? <div className="news-block__arrow" /> : ""}
    </a>
  );
}
