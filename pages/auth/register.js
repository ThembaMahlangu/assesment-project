import Head from "next/head";

const Signup = () => {
  const navigateToSignup = () => {
    window.location.href = "/auth/register";
  };

  const navigateToHome = () => {
    window.location.href = "/";
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
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              <label className="block text-gray-700 font-bold mb-2 mt-4" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 align-middle"
              type="submit"
            >
              Register
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