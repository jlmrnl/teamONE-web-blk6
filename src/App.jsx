import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LoginForm from "./Form/Login";
import RegistrationForm from "./Form/RegistrationForm";
import LoginLayout from "./Form/LoginLayout/LoginLayout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
