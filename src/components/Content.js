import Bestsellers from "./Bestsellers";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import News from "./News";

export default function Content() {
  return (
    <section>
      <Bestsellers />
      <Categories />
      <NewArrivals />
      <News />
    </section>
  );
}
