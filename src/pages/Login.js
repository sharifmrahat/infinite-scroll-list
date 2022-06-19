import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username !== "foo" && password !== "bar") {
      setError("Invalid username & password");
      return;
    }
    setUser(true);
    const userData = { user: "foo", login: true };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <>
      <div className="p-4 border border-orange-600 shadow-xl w-fit mx-auto rounded my-10">
        <div>
          <p className="text-lg lg:text-xl text-red-600 mb-5">{error}</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="text-left flex flex-col gap-4 justify-center items-center px-2 md:px-6 text-lg">
            <div>
              <label htmlFor="username">Email:</label>
              <p>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-orange-600 outline-none rounded"
                  type="text"
                  name="username"
                  id="username"
                  required
                />
              </p>
            </div>
            <div>
              <label htmlFor="user-password">Password:</label>
              <p>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-orange-600 outline-none rounded"
                  type="password"
                  name="password"
                  id="user-password"
                  required
                />
              </p>
            </div>
            <div>
              <button
                className="bg-green-800 hover:bg-orange-600 text-white px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
