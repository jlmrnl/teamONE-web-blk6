import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LoginForm from "./Form/Login";
import RegistrationForm from "./Form/RegistrationForm";
import LoginLayout from "./Form/LoginLayout/LoginLayout";
import Home from "./Form/components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
