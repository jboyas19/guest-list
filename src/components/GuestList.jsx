export default function GuestList({ guests, onSelect }) {
  return (
    <ul className="guest-list">
      {guests.map((guest) => (
        <li key={guest.id} className="guest-item" onClick={() => onSelect(guest)}>
          <strong>{guest.name}</strong>
          <span>{guest.email}</span>
        </li>
      ))}
    </ul>
  );
}