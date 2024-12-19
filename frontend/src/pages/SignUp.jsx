import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import signUpImage from "../assets/create.png"; // Import the image

//hello 

const SignUp = () => {
  const navigate = useNavigate(); // React Router's navigate function
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Sign-up error:", error.message);
      setError("Failed to sign up. Please check your email and password.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to right, #d7e8f7, #a4c8f0, #74a8e8)",
      }}
    >
      {/* Outer container */}
      <div className="relative bg-white shadow-lg rounded-lg flex overflow-hidden max-w-5xl w-full">
        {/* Left section - Sign Up Form */}
        <div className="w-3/5 p-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Create an Account!</h2>
          <p className="text-gray-600 mb-8">
            Please sign up to access your account.
          </p>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email" // Name attribute added for easier form handling
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" // Name attribute added for easier form handling
                placeholder="Enter your password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg font-semibold"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-indigo-600 hover:text-indigo-700">
              Sign In
            </Link>
          </p>
        </div>

        {/* Right section - Image */}
        <div className="w-2/5 bg-indigo-600 text-white flex justify-center items-center p-8">
          <img
            src={signUpImage} // Use the imported image
            alt="Sign Up Illustration"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
