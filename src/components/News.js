import NewsBlock from "./NewsBlock";
import { newsBlocks } from "../utils/constants";

export default function News() {
  const renderNewsBlocks = newsBlocks.map((block) => {
    return (
      <NewsBlock
        key={block.id}
        isSquare={block.isSquare}
        imgSrc={block.imgSrc}
        text={block.text}
      />
    );
  });

  return (
    <section className="news">
      <h2 className="section-title">latest news</h2>
      <div className="news__grid">{renderNewsBlocks}</div>
    </section>
  );
}
