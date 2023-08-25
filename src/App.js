import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import EventsPage from "./pages/EventsPage";
import ContactsPage from "./pages/ContactsPage";
import Contests from "./components/events/subroutes/Contests";
import Sessions from "./components/events/subroutes/Sessions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route exact path="/events/sessions" element={<EventsPage />} />
          <Route exact path="/events/contests" element={<Contests />} />
           
          
          <Route path="/contacts" element={<ContactsPage />} />
         
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
