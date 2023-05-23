import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.tsx";
import { Home } from "./pages/Home.tsx";
import { Users } from "./pages/Users.tsx";
import { Rooms } from "./pages/Rooms.tsx";
import { Events } from "./pages/Events.tsx";
import { DashboardPage } from "./pages/DashboardPage.tsx";
import { RegisterPage } from "./pages/RegisterPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
