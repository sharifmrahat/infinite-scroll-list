import React from "react";

const Home = ({ user, setUser }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleLogout = () => {
    setUser(false);
    const userData = { user: "foo", login: false };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div>
      Home Page
      <p>User: {userData.user}</p>
      <button
        className="bg-blue-700 p-4 block my-10 text-white text-center"
        onClick={handleLogout}
      >
        LoginOut
      </button>
    </div>
  );
};

export default Home;
