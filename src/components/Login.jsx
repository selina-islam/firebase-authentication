import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { app } from "../Firebase/firebaseInfo";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    if (!user.emailVerified) {
      setError("Please verify your email before logging in.");
      return;
    }

    alert("Login successfully");
    navigate("/");
  })
  .catch((error) => {
    console.error("Login failed", error);
    setError("Invalid user email or password. Please try again!");
  });

  };
  const handleGoogleLogin=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log('Google login successfully', result)
    navigate('/')
  }).catch((error) => {
   console.log('Google login failed', error)
  });
  }

  const handleFacebookLogin=()=>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
  const user= result.user
  navigate('/')
  })
  .catch((error) => {
   console.log('facebook login error', error)
  });

  }

  const handleGithubLogin=()=>{
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
   
    // The signed-in user info.
    const user = result.user;
   console.log('github login successfully', user)
   navigate('/')
  }).catch((error) => {
   console.log('Login error with github', error)
  });
  }
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white max-w-md mx-auto p-8 w shadow-md rounded">
        <h2 className="font-semibold text-2xl text-center mb-3">
          Please Register
        </h2>
        {/* login form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-semibold text-sm mb-2 block text-gray-700">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              value={email}
              className="border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold text-sm mb-2 block text-gray-700">
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Enter your password"
              className="border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded w-full"
            />
          </div>
          {error && <p className="text-sm italic text-red-600 ">{error}</p>}
          <button className="py-2 bg-blue-700 w-full rounded text-white text-sm hover:bg-blue-800">
            Submit
          </button>
        </form>
        {/* social login */}
        <p className="text-sm text-center p-3 text-gray-600">Or login with</p>
        <div className=" flex  gap-4 items-center justify-center space-x-0 space-y-3 text-sm">
          <button onClick={handleGoogleLogin} className=" flex items-center space-x-1 bg-red-600 px-3 rounded cursor-pointer text-white py-2">
            <FaGoogle />
            <span>Google</span>
          </button>
          <button onClick={handleFacebookLogin} className="flex items-center space-x-1 bg-blue-600 px-4 rounded cursor-pointer text-white py-2">
            <FaFacebook /> <span>Facebook</span>
          </button>
          <button onClick={handleGithubLogin} className="flex items-center space-x-1 bg-gray-900 px-3 rounded cursor-pointer text-white py-2">
            <FaGithub />
            <span>GitHub</span>
          </button>
        </div>
        {/* texts */}
        <p className="text-center text-sm text-gray-700">
          Already have an account? Please
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
