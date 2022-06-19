import React from "react";

const userCard = ({ randomUser }) => {
  const { name, picture } = randomUser;
  return (
    <div>
      <img
        className="w-20 rounded-full aspect-square inline-block"
        src={picture?.thumbnail}
        alt=""
      />
      <span className="mx-4">{name?.first}</span>
    </div>
  );
};

export default userCard;
