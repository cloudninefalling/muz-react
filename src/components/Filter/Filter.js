import "./Filter.css";
import FilterFieldset from "../FilterFieldset/FilterFieldset";

export default function Filter({ fieldsets, filter, setFilter }) {
  const handleChange = (key, value) => {
    if (filter[key].includes(value)) {
      setFilter((prev) => ({
        ...prev,
        [key]: filter[key].filter((v) => v !== value),
      }));
      return;
    }
    setFilter((prev) => ({
      ...prev,
      [key]: filter[key].concat(value),
    }));
  };

  const renderFilterFieldsets = Object.keys(fieldsets).map((fieldset, i) => {
    return (
      <FilterFieldset
        key={Object.keys(fieldsets)[i]}
        title={Object.keys(fieldsets)[i]}
        options={Array.from(fieldsets[fieldset])}
        handleChange={handleChange}
      />
    );
  });

  return <form className="filter">{renderFilterFieldsets}</form>;
}
