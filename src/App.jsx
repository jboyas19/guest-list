import { useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetail from "./components/GuestDetail";
import "./index.css";

const PLACEHOLDER_GUESTS = [
  { id: 1, name: "Edmond Steuber", email: "Edmond.Steuber@example.com", phone: "466-489-9248 x348", job: "Engineer", bio: "Loves coding and coffee." },
  { id: 2, name: "Nichole Luettgen", email: "Nichole_Luettgen43@example.org", phone: "1-333-579-6094 x83316", job: "Designer", bio: "Creative and detail-oriented." },
  { id: 3, name: "Idell Mayert", email: "Idell_Mayert@example.org", phone: "583-250-0421 x9996", job: "Manager", bio: "Team player and leader." },
  { id: 4, name: "Elyse Rath", email: "Elyse_Rath@example.net", phone: "(805) 768-9474", job: "Developer", bio: "Full stack enthusiast." },
  { id: 5, name: "Emie Breitenberg", email: "Emie_Breitenberg2@example.net", phone: "(789) 242-4319 x81157", job: "Analyst", bio: "Data driven decision maker." },
  { id: 6, name: "Dante Gerhold", email: "Dante_Gerhold50@example.org", phone: "1-383-356-1556 x94696", job: "Consultant", bio: "Strategic thinker." },
];

export default function App() {
  const [guests] = useState(PLACEHOLDER_GUESTS);
  const [selectedGuest, setSelectedGuest] = useState(null);

  function handleSelect(guest) {
    setSelectedGuest(guest);
  }

  function handleBack() {
    setSelectedGuest(null);
  }

  return (
    <div className="app">
      <h1>Fullstack Convention Center</h1>
      <h2>Guest List</h2>

      {selectedGuest ? (
        <GuestDetail guest={selectedGuest} onBack={handleBack} />
      ) : (
        <GuestList guests={guests} onSelect={handleSelect} />
      )}
    </div>
  );
}