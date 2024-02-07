export default function GuitarListItem({ isNarrow, isDark, guitar }) {
  return (
    <li
      className={`guitar-list__item ${isDark ? "guitar-list__item_dark" : ""} ${
        isNarrow ? "guitar-list__item_narrow" : ""
      }`}
    >
      <div className="guitar-list__item-background">
        <img
          className="guitar-list__item-image"
          src={guitar.src}
          alt={guitar.name}
        />
      </div>
      <p className="guitar-list__item-name">{guitar.name}</p>
      <p className="guitar-list__item-price">${guitar.price}</p>
      <button
        type="button"
        className={`guitar-list__like-button ${
          isDark ? "guitar-list__like-button_dark" : ""
        }`}
      />
    </li>
  );
}
