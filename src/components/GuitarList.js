import GuitarListItem from "./GuitarListItem";

export default function GuitarList({ isCentered, guitars }) {
  const guitarsArray = guitars.map((guitar) => {
    return (
      <GuitarListItem
        key={guitar.id}
        isNarrow={!isCentered}
        isDark={!isCentered}
        guitar={guitar}
      />
    );
  });

  return (
    <ul
      className={`guitar-list ${
        isCentered ? "guitar-list_centered" : "guitar-list_off-center"
      }`}
    >
      {guitarsArray}
    </ul>
  );
}
