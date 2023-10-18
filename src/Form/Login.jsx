import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = async () => {
    try {
      setError(null); // Clear any previous error

      const response = await axios.post(
        "http://localhost:3000/user/signin",
        formData
      );

      if (response.status === 200) {
        // Sign-in successful, extract the token from the response
        const { token, user } = response.data;

        // Store the token in local storage (or use cookies for more secure storage)
        localStorage.setItem("token", token);

        // Redirect to a protected route or user dashboard using window.location.href
        window.location.href = "/newsfeed"; // Adjust the URL as needed
      } else {
        // Handle sign-in error
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const sansFontStyle = {
    fontFamily: "Roboto, sans-serif",
  };

  return (
    <div
      className="bg-purple w-full lg:w-1/2 h-screen flex flex-col justify-center items-center"
      style={sansFontStyle}
    >
      <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4 lg:mb-16 font-sans">
        Sign in to your account
      </h1>
      <form className="w-1/2">
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4 mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleSignIn}
            className="bg-white text-black px-6 py-2 text-xl font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign in
          </button>
          <Link
            to="/register"
            className="bg-white text-black px-6 py-2 text-lg font-bold rounded hover:bg-opacity-70 mr-4"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
