import GuitarList from "./GuitarList";
import { newArrivals } from "../utils/guitars";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  return (
    <section className="new-arrivals">
      <h2 className="section-title new-arrivals__title">new arrivals</h2>
      <p className="new-arrivals__subtitle">
        The new line of&nbsp;
        <span className="new-arrivals__bold-span">Fender Rarities </span>
        guitars in&nbsp;2021. The line includes eight electric guitars and one
        bass. A&nbsp;distinctive feature of&nbsp;guitars is&nbsp;the use
        of&nbsp;the highest quality wood species, premium lacquers and paints,
        as&nbsp;well as&nbsp;the most accurate electronics.
      </p>
      <Link
        to="/catalog/new"
        className="new-arrivals__button"
        type="button"
      ></Link>
      <GuitarList isCentered={false} guitars={newArrivals} />
    </section>
  );
}
