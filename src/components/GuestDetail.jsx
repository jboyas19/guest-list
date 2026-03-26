export default function GuestDetail({ guest, onBack }) {
  return (
    <div className="guest-detail">
      <h2>{guest.name}</h2>
      <p><strong>Email:</strong> {guest.email}</p>
      <p><strong>Phone:</strong> {guest.phone}</p>
      <p><strong>Job:</strong> {guest.job}</p>
      <p><strong>Bio:</strong> {guest.bio}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}