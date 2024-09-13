import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="backgoung-img"
        ></img>
      </div>
      <form className="w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white   rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-8 bg-red-700 w-full rounded-lg">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
