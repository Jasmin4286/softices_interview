import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserListing from "./pages/UserListing";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleUser from "./pages/SingleUser";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserListing />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
