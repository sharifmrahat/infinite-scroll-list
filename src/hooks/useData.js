import { useEffect, useState } from "react";

const useData = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const url = "https://randomuser.me/api/?results=500";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRandomUsers(data.results));
  }, [url]);
  return [randomUsers, setRandomUsers];
};

export default useData;
