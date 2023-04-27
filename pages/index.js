import Head from "next/head";

const index = () => {

  // funtion to navigate to the signup page
  const navigateToSignup = () => {
    window.location.href = "/auth/register";
  };
  
  const navigateToLogin = () => {
    window.location.href = "/auth/login";
  };

  return (
    <>
      <Head>
        <title>Assessment App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between items-center py-4 px-8 bg-white">
        <div className="text-lg font-bold cursor-pointer">Assessment App</div>
        <button onClick={navigateToSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Assessment App
        </h1>
        <p className="mt-4 text-lg text-center">
          This is an assessment project app so without wasting your time let's
        </p>
        <button onClick={navigateToLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Get Started
        </button>
      </div>
      <footer className="py-4 px-8 bg-gray-200 text-gray-600 text-sm text-center">
        &copy; 2023 Assessment App. All rights reserved.
      </footer>
    </>
  );
};

export default index;