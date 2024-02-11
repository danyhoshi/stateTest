export default function Letter({ letter, onToggle, isSelected }) {
  return (
    <li className={isSelected.has(letter.id) ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected.has(letter.id)}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
