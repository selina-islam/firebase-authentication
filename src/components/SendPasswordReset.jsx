import React, { useState } from "react";
import { app } from "../Firebase/firebaseInfo";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const SendPasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const auth = getAuth(app);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email");
      setIsSuccess(false);
      return;
    }
    try {
   await  sendPasswordResetEmail(auth, email)
        .then(() => {
         setMessage('Password reset email sent! Check your inbox.')
         console.log('email from sendpasswordreset',email)
         setIsSuccess(true)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Getting an error to submit form',errorMessage)
          // ..
        });
    } catch (error) {
        console.error('Error sending password reset email:', error.message)
        setMessage('Failed to  sent password reset email. Please check your email address and try again')
        setIsSuccess(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Your Password
        </h2>
        {message && (
          <p
            className={`p-2 text-center ${
              isSuccess
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handlePasswordReset} className="space-y-4 ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="py-2 border rounded-md px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-700 rounded-md hover:bg-blue-800"
            >
              Send Reset Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendPasswordReset;
