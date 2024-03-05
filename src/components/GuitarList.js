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
    <div
      className={`guitar-list__container ${
        isCentered ? "guitar-list__container_centered" : ""
      }`}
    >
      <ul className={`guitar-list`}>{guitarsArray}</ul>
    </div>
  );
}
