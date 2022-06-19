import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import Loader from "../components/Loader";
import SkeletonLoader from "../components/SkeletonLoader";
import UserCard from "../components/UserCard";

const Home = ({ setUser }) => {
  const [amount, setAmount] = useState(8);
  const [randomUsers, setRandomUsers] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const url = `https://randomuser.me/api/?results=${amount}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRandomUsers(data?.results));
  }, [url, amount]);

  const handleLogout = () => {
    setUser(false);
    const userData = { user: "foo", login: false };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const fetchMoreData = () => {
    setAmount(amount + 1);
    setTotalResults(totalResults + 1);
  };

  return (
    <>
      <section className="mb-10 sticky top-0 z-50">
        <Header handleLogout={handleLogout}></Header>
      </section>
      <h1 className="text-center mb-10 text-lg lg:text-xl text-slate-800 font-bold w-fit mx-auto">
        Random User Infinite Scroll
      </h1>
      <section>
        <div className="border border-blue-700 w-fit mx-auto shadow-lg rounded-md">
          <InfiniteScroll
            dataLength={randomUsers?.length}
            next={fetchMoreData}
            hasMore={randomUsers?.length !== totalResults}
            loader={
              <>
                <SkeletonLoader />
              </>
            }
          >
            <div className="w-fit mx-auto px-5">
              {!randomUsers?.length ? (
                <Loader></Loader>
              ) : (
                <>
                  {randomUsers.map((randomUser, index) => (
                    <UserCard key={index} randomUser={randomUser}></UserCard>
                  ))}
                </>
              )}
            </div>
          </InfiniteScroll>
        </div>
      </section>
    </>
  );
};
export default Home;
