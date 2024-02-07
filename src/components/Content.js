import Bestsellers from "./Bestsellers";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import News from "./News";

export default function Content() {
  return (
    <main className="content">
      <Bestsellers />
      <Categories />
      <NewArrivals />
      <News />
    </main>
  );
}
