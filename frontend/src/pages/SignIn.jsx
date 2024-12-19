import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Firebase auth

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Firebase SignIn
      navigate("/home"); // Redirect to home
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card shadow p-4 mt-5">
            <h3 className="text-center mb-4">Sign In</h3>
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text zmdi zmdi-email"></span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text zmdi zmdi-lock"></span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                Sign In
              </button>
            </form>
            <div className="text-center mt-3">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
