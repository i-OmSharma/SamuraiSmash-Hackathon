import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
  const navigate = useNavigate(); // React Router's navigate function

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in:", userCredential.user);
      navigate("/home");
    } catch (error) {
      console.error("Sign-in error:", error.message);
      alert("Failed to sign in. Please check your email and password.");
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
        {/* Left section - Sign In Form */}
        <div className="w-3/5 p-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Welcome Back!</h2>
          <p className="text-gray-600 mb-8">
            Please sign in to continue accessing your account.
          </p>
          <form onSubmit={handleSignIn}>
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
              Sign In
            </button>
          </form>
        </div>

        {/* Right section - Sign Up prompt */}
        <div className="w-2/5 bg-indigo-600 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-bold mb-4">New here?</h2>
          <p className="text-center mb-6 text-sm">
            Sign up now to create an account and start your journey.
          </p>
          <Link to="/signup">
            <button className="bg-white text-indigo-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
