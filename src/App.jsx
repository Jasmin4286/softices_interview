import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserListing from "./pages/UserListing";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleUser from "./pages/SingleUser";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NavBarCompo from "./pages/NavBarCompo";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarCompo />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserListing />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
