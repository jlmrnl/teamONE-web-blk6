import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "", // Add confirm password field
  birthdate: "",
  successMessage: "",
  errorMessage: "",
};

function SignUpForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setFormData({
        ...formData,
        errorMessage: "Password and confirm password do not match",
        successMessage: "",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );

      if (response.status === 201) {
        setFormData({
          ...initialFormData,
          successMessage: "Successfully registered!",
          errorMessage: "",
        });
      } else {
        setFormData({
          ...formData,
          errorMessage: "Registration failed",
          successMessage: "",
        });
      }
    } catch (error) {
      setFormData({
        ...formData,
        errorMessage: "Error during registration",
        successMessage: "",
      });
    }
  };

  return (
    <div className="bg-purple w-full lg:w-1/2 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4 lg:mb-16">
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
          <label
            className="block text-white text-lg font-bold"
            htmlFor="birthdate"
          >
            Birthdate
          </label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-400 outline-none text-white bg-purple text-2xl"
            required
          />
        </div>
        {formData.successMessage && (
          <div className="text-green-500 text-lg mb-4">
            {formData.successMessage}
          </div>
        )}
        {formData.errorMessage && (
          <div className="text-red-500 text-lg mb-4">
            {formData.errorMessage}
          </div>
        )}
        <div className="mb-4 flex justify-center">
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign Up
          </button>
          <Link
            to="/"
            className="bg-white text-black px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
