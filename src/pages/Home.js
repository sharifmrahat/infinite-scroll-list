import React from "react";

const Home = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(false);
    const userData = { user: "foo", login: false };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div>
      Home Page
      <button
        className="bg-blue-700 p-4 block my-10 text-white text-center"
        onClick={handleLogout}
      >
        LoginOut
      </button>
      <div className="my-20 h-[400px] overflow-auto w-fit px-20 mx-auto"></div>
    </div>
  );
};
export default Home;
