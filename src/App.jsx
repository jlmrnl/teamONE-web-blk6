import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LoginForm from "./Form/Login";
import RegistrationForm from "./Form/RegistrationForm";
import LoginLayout from "./Form/LoginLayout/LoginLayout";
import Home from "./components/Home";
import AdminLayout from "./AdminLayout/AdminLayout";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Home />} />

          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
