import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the sign-in data here
    console.log("Sign In submitted:", formData);
    // You can implement authentication logic here
  };

  return (
    <div className="bg-purple w-1/2 h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-white font-bold mb-8 font-dancing">
        Sign in to your account
      </h1>
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-lg font-bold" htmlFor="email">
            Email
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
        <div className="mb-4 mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-indigo text-sky-300 px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign In
          </button>
          <Link
            to="/"
            className="bg-indigo text-sky-300 px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
