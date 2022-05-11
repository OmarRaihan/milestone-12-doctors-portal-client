import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
