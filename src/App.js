import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import EventsPage from "./pages/EventsPage";
import ContactsPage from "./pages/ContactsPage";
import Contests from "./components/events/subroutes/Contests";
import Collaborations from "./components/events/subroutes/Collaborations";
import ResourcesPage from "./pages/ResourcesPage";
import HomePage from "./pages/HomePage";
import AmbassadorPage from "./pages/AmbassadorPage";
import Header from "./components/common/Nav";
import Footer from "./components/common/Footer";
import TeamsPage from "./pages/TeamPage";
import { useState } from "react";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <BrowserRouter>
      <div><Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/></div>
        <Routes>
          
          <Route exact path="/events/sessions" element={<EventsPage isMenuOpen={isMenuOpen} />} />
          <Route exact path="/events/contests" element={<Contests isMenuOpen={isMenuOpen} />} />
          <Route exact path="/events/collaborations" element={<Collaborations isMenuOpen={isMenuOpen} />} />
          <Route exact path="/resources" element={<ResourcesPage isMenuOpen={isMenuOpen} />} />
           
          <Route path="/team" element={<TeamsPage isMenuOpen={isMenuOpen} />}/>
          <Route path="/contacts" element={<ContactsPage isMenuOpen={isMenuOpen} />} />
         
          <Route path="/" element={<HomePage isMenuOpen={isMenuOpen} />} />
          <Route path="/joinus" element={<AmbassadorPage isMenuOpen={isMenuOpen} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
