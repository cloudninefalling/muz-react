import { bestsellers } from "../utils/guitars";
import GuitarList from "./GuitarList";

export default function Bestsellers() {
  const bannerIterations = Math.ceil(window.screen.width / 465) + 1;
  const bannerArray = new Array(bannerIterations).fill("").map((_, i) => {
    return (
      <div key={`banner__item-${i}`} style={{ display: "flex", gap: 36 }}>
        <div className="bestsellers__banner-star"></div>
        <span className="bestsellers__banner-span">bestsellers</span>
      </div>
    );
  });
  return (
    <section className="bestsellers">
      <div className="bestsellers__banner">{bannerArray}</div>
      <GuitarList isCentered={true} guitars={bestsellers} />
    </section>
  );
}
