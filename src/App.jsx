import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserListing from "./pages/UserListing";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import SingleUser from "./pages/SingleUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserListing />} />
          <Route path="/users/:id" element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
