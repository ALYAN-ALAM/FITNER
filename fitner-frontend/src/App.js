import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import NavBar from "./components/Navbar/NavBar";
import useStoreUserEffect from "./hooks/useStoreUserEffect.js";
import Chat from "./pages/Chat/Chat";

function App() {
  const userId = useStoreUserEffect();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
