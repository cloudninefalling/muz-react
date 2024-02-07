import GuitarList from "./GuitarList";
import { newArrivals } from "../utils/constants";

export default function NewArrivals() {
  return (
    <section className="new-arrivals">
      <h2 className="section-title">new arrivals</h2>
      <p className="new-arrivals__subtitle">
        The new line of&nbsp;
        <span className="new-arrivals__bold-span">Fender Rarities </span>
        guitars in&nbsp;2021. The line includes eight electric guitars and one
        bass. A&nbsp;distinctive feature of&nbsp;guitars is&nbsp;the use
        of&nbsp;the highest quality wood species, premium lacquers and paints,
        as&nbsp;well as&nbsp;the most accurate electronics.
      </p>
      <button className="new-arrivals__button" type="button"></button>

      <GuitarList isCentered={false} guitars={newArrivals} />
    </section>
  );
}
