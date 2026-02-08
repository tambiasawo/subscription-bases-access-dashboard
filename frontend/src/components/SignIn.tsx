import React from "react";
//import { signIn } from 'next-auth/react';

const SignIn = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Handle sign in with email and password
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      <div className="mt-4">
        <button
          //onClick={() => signIn("google")}
          className="bg-red-500 text-white p-2 rounded mx-2 hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <button
          //onClick={() => signIn("github")}
          className="bg-gray-800 text-white p-2 rounded mx-2 hover:bg-gray-700"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignIn;
