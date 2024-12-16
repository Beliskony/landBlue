
import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Presentation from "./pages/Presentation";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
  </div>
  );
}
