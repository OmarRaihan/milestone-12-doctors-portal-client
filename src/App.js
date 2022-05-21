import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/appointment"
            element={
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyAppointments />}></Route>
            <Route path="review" element={<MyReview />}></Route>
            <Route path="payment/:id" element={<Payment />}></Route>
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addDoctor"
              element={
                <RequireAdmin>
                  <AddDoctor />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageDoctor"
              element={
                <RequireAdmin>
                  <ManageDoctors />
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
