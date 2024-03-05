import {
  ACOUSTIC_GUITARS,
  ELECTRIC_GUITARS,
  CLASSICAL_GUITARS,
  UKULELE,
  BASS_GUITARS,
  ACCESSORIES,
  newArrivals,
} from "../../utils/guitars";
import "./Catalog.css";
import Filter from "../../components/Filter/Filter";
import GuitarGrid from "../../components/GuitarGrid/GuitarGrid";
import { useLocation } from "react-router-dom";
import useFilter from "../../hooks/useFilter";
import { useState } from "react";

export default function Catalog() {
  const location = useLocation();
  const curCategory = location.pathname.slice(9);

  const getData = () => {
    switch (curCategory) {
      case "acoustic":
        return ACOUSTIC_GUITARS;
      case "electric":
        return ELECTRIC_GUITARS;
      case "bass":
        return BASS_GUITARS;
      case "classical":
        return CLASSICAL_GUITARS;
      case "ukulele":
        return UKULELE;
      case "accessories":
        return ACCESSORIES;
      case "new":
        return newArrivals;
      default:
        return [];
    }
  };

  const guitars = getData();

  const fieldsets = {
    manufacturer: new Set(),
    type: new Set(),
  };

  guitars.forEach((guitar) => {
    Object.keys(fieldsets).forEach((key) => {
      fieldsets[key].add(guitar[key]);
    });
  });

  const emptyFilter = {};
  Object.keys(fieldsets).forEach((key) => {
    emptyFilter[key] = [];
  });
  const [filter, setFilter] = useState(emptyFilter);

  const filteredGuitars = useFilter(guitars, filter);

  return (
    <section className="catalog">
      <h2 className="catalog__title">{curCategory}</h2>
      <Filter fieldsets={fieldsets} filter={filter} setFilter={setFilter} />
      <GuitarGrid guitars={filteredGuitars} />
    </section>
  );
}
