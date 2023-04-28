import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registering, setRegistering] = useState(false);
  const [highlightedField, setHighlightedField] = useState("");

  const navigateToSignup = () => {
    window.location.href = "/auth/register";
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  const registerUser = async (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      setHighlightedField(!name ? "name" : !email ? "email" : "password");
      return;
    }
    setRegistering(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`,
      { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: password })
      }
    );
    if (res.ok) {
      window.location.href = "/auth/login";
    } else {
      const error = await res.json();
      setErrorMessage(error.message);
      setRegistering(false);
      alert("Password should be 8 characters")
    }
  };

  const trackForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Assessment App - Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between items-center py-4 px-8 bg-white">
        <div onClick={navigateToHome} className="text-lg font-bold cursor-pointer">Assessment App</div>
        <button onClick={navigateToSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Assessment App
        </h1>
        <div className="mt-8 border-2 border-gray-200 rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <form onChange={trackForm}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${highlightedField === "name" ? "border-red-500" : ""}`}
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setHighlightedField(e.target.value ? "" : "name");
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${highlightedField === "email" ? "border-red-500" : ""}`}
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setHighlightedField(e.target.value ? "" : "email");
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${highlightedField === "password" ? "border-red-500" : ""}`}
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setHighlightedField(e.target.value ? "" : "password");
                }}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 align-middle"
              onClick={registerUser}
              disabled={registering}
            >
              {registering ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
      <footer className="py-4 px-8 bg-gray-200 text-gray-600 text-sm text-center">
        &copy; 2023 Assessment App. All rights reserved.
      </footer>
    </>
  );
};

export default Signup;