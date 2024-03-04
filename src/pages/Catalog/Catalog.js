import {
  ACOUSTIC_GUITARS,
  ELECTRIC_GUITARS,
  CLASSICAL_GUITARS,
  UKULELE,
  BASS_GUITARS,
  ACCESSORIES,
} from "../../utils/guitars";
import { FIELDSETS } from "../../utils/constants";
import "./Catalog.css";
import Filter from "../../components/Filter/Filter";
import GuitarGrid from "../../components/GuitarGrid/GuitarGrid";
import { useLocation } from "react-router-dom";
import useFilter from "../../hooks/useFilter";
import { useState } from "react";

export default function Catalog() {
  const location = useLocation();
  const category = location.pathname.slice(9);

  const emptyFilter = {};
  Object.keys(FIELDSETS).forEach((key) => {
    emptyFilter[key] = [];
  });
  const [filter, setFilter] = useState(emptyFilter);

  const guitarLists = {
    acoustic: ACOUSTIC_GUITARS,
    electric: ELECTRIC_GUITARS,
    bass: BASS_GUITARS,
    classical: CLASSICAL_GUITARS,
    ukulele: UKULELE,
    accessories: ACCESSORIES,
  };

  const guitars = guitarLists[category];

  const filteredGuitars = useFilter(guitars, filter);

  return (
    <main>
      <section className="catalog">
        <h2 className="catalog__title">{category}</h2>
        <Filter fieldsets={FIELDSETS} filter={filter} setFilter={setFilter} />
        <GuitarGrid guitars={filteredGuitars} />
      </section>
    </main>
  );
}
