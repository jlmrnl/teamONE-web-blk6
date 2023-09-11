import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Form submitted:", formData);
      // Use the Link component to navigate to the login page
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="bg-purple w-full lg:w-1/2 h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl text-white font-bold mb-8 font-dancing">
        Create your account
      </h1>
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-lg font-bold font-thin"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border-b-2 border-gray-400 outline-none text-white bg-purple text-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-lg font-bold"
            htmlFor="birthdate"
          >
            Birthdate
          </label>
          <input
            type="text"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
            pattern="\d{2}/\d{2}/\d{4}"
            className="w-full border-b-2 border-gray-400 outline-none text-white bg-purple text-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border-b-2 border-gray-400 outline-none text-white bg-purple text-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-lg font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border-b-2 border-gray-400 outline-none text-white bg-purple text-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-lg font-bold"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full border-b-2 border-gray-400 outline-none text-white bg-purple text-2xl"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-lg font-bold">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />{" "}
            Terms & Conditions
          </label>
        </div>
        <div className="mb-4 flex justify-center">
          <button
            type="submit"
            className="bg-indigo text-sky-300 px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign Up
          </button>
          <Link
            to="/"
            className="bg-indigo text-sky-300 px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
