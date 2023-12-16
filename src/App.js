import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EventsPage from "./pages/EventsPage";
import ContactsPage from "./pages/ContactsPage";
import Contests from "./components/events/subroutes/Contests";
import Collaborations from "./components/events/subroutes/Collaborations";
import ResourcesPage from "./pages/ResourcesPage";
import HomePage from "./pages/HomePage";
import AmbassadorPage from "./pages/AmbassadorPage";
import Header from "./components/common/Nav";
import TeamsPage from "./pages/TeamPage";
import ScrollToTop from "./components/common/ScrollToTop";
import { useContext, useState } from "react";
import Foot from "./components/common/Foot";
import Footer from "./components/common/Footer";
import Events from "./components/admin/components/AddEvents";
import AdminPage from "./components/admin/pages/AdminPage";
import { AuthContext } from "./contexts/AuthContext";
import AuthPage from "./components/admin/pages/AuthPage";
import OutPage from "./components/admin/pages/OutPage";
import EventPage from "./components/admin/pages/EventPage";
import TeamPage from "./components/admin/pages/TeamPage";
import AddSpeaker from "./components/admin/components/speakers/AddSpeaker";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const auth = useContext(AuthContext);
  const { user } = auth;
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <Routes>
          <Route
            exact
            path="/events/sessions"
            element={<EventsPage isMenuOpen={isMenuOpen} />}
          />
          <Route
            exact
            path="/events/contests"
            element={<Contests isMenuOpen={isMenuOpen} />}
          />
          <Route
            exact
            path="/events/collaborations"
            element={<Collaborations isMenuOpen={isMenuOpen} />}
          />
          <Route
            exact
            path="/resources"
            element={<ResourcesPage isMenuOpen={isMenuOpen} />}
          />

          <Route path="/team" element={<TeamsPage isMenuOpen={isMenuOpen} />} />
          <Route
            path="/contacts"
            element={<ContactsPage isMenuOpen={isMenuOpen} />}
          />

          <Route path="/" element={<HomePage isMenuOpen={isMenuOpen} />} />
          <Route
            path="/joinus"
            element={<AmbassadorPage isMenuOpen={isMenuOpen} />}
          />
          <Route
            path="/noobcodeadmin"
            element={
              user == null ? (
                <Navigate to={"/auth"} />
              ) : (
                <AdminPage isMenuOpen={isMenuOpen} />
              )
            }
          />
          <Route
            exact
            path="/auth"
            element={<AuthPage isMenuOpen={isMenuOpen} />}
          />
          <Route
            exact
            path="/noobcodeadmin/outsources"
            element={
              user == null ? (
                <Navigate to={"/auth"} />
              ) : (
                <OutPage isMenuOpen={isMenuOpen} />
              )
            }
          />
          <Route
            exact
            path="/noobcodeadmin/events"
            element={
              user == null ? (
                <Navigate to={"/auth"} />
              ) : (
                <EventPage isMenuOpen={isMenuOpen} />
              )
            }
          />
          <Route
            exact
            path="/noobcodeadmin/team"
            element={
              user == null ? (
                <Navigate to={"/auth"} />
              ) : (
                <TeamPage isMenuOpen={isMenuOpen} />
              )
            }
          />
          <Route
            path="/noobcodeadmin/events/addspeaker"
            element={
              user == null ? (
                <Navigate to={"/auth"} />
              ) : (
                <AddSpeaker isMenuOpen={isMenuOpen} />
              )
            }
          />
        </Routes>

        <Footer />

        <Foot />
      </BrowserRouter>
    </>
  );
}

export default App;
