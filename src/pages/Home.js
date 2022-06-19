import React from "react";
import useData from "../hooks/useData";
import UserCard from "../components/UserCard";

const Home = ({ user, setUser }) => {
  const [randomUsers] = useData();
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
      <div className="my-20">
        {!randomUsers ? (
          <p>Loading..</p>
        ) : (
          randomUsers.map((randomUser) => (
            <UserCard randomUser={randomUser}></UserCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
