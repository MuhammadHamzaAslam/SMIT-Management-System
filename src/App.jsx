import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Teacher from "./Teacher/Teacher";
import Admin from "./Admin/Admin";
import Student from "./Student/student";
import Home from "./HomePage/Home";
import Login from "./Auth/login";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
