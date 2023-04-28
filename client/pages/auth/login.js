import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [highlightedField, setHighlightedField] = useState("");
  const [verifying, setVerifying] = useState(false);
    const navigateToHome = () => {
        window.location.href = "/";
    };

    const navigateToSignup = () => {
        window.location.href = "/auth/register";
    };

    const loginUser = async (event) => {
      event.preventDefault();
      if (!email || !password) {
        setHighlightedField(!email ? "email" : "password");
        return;
      }
      setVerifying(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
        { 
          method: 'POST', 
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password })
        }
      );
      if (res.ok) {
        const custom = res.token;
        localStorage.setItem("token", custom);
        window.location.href = "/dashboard/home"
      } else {
        const error = await res.json();
        setErrorMessage(error.message);
        console.log(errorMessage);
        setVerifying(false);
        alert("Your password/email is incorrect")
      }
    };

    const trackForm = (event) => {
      event.preventDefault();
    };

  return (
    <>
      <Head>
        <title>Assessment App - Login </title>
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
          <h2 className="text-2xl font-bold mb-4">Login Below</h2>
          <form onSubmit={trackForm}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${highlightedField === "email" ? "border-red-500" : ""}`}
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value); setHighlightedField(e.target.value ? "" : "email");}}
                placeholder="Enter your email"
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
                onChange={(e) => {setPassword(e.target.value); setHighlightedField(e.target.value ? "" : "password");}}
                placeholder="Enter your password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 align-middle"
              onClick={loginUser}
            >
              {verifying ? "Verifying..." : "Login"}
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

export default Login;