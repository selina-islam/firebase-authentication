import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { app } from "../Firebase/firebaseInfo";
import { getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router";

const UpdatePassword = () => {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Password do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 character long");
      return;
    }
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      try {
        await updatePassword(user, newPassword)
          .then(() => {
            setMessage("Password updated successfully");
            navigate("/");
          })
          .catch((error) => {
           console.log(error);
          });
      } catch (error) {
       
          setMessage("Failed to update password. Please try again later.");
      }
    } else {
      setMessage("Not authenticated user found");
      alert("Please login");
      navigate("/login");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Update Password
        </h2>
        {message && (
          <p
            className={`p-2 text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handlePasswordUpdate} className="space-y-4 ">
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              New Password:
            </label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter New Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute bottom-3 right-0 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </div>
          </div>
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password:
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Enter Confirm New Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute bottom-3 right-0 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 mt-4 transition-all duration-300 "
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
