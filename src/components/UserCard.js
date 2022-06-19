import React from "react";

const UserCard = ({ randomUser }) => {
  const { name, picture, location } = randomUser;
  return (
    <>
      <div className="flex flex-row justify-center items-center w-fit gap-4 p-4">
        <div>
          <img
            className="w-12 rounded-full aspect-square"
            src={picture?.thumbnail}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-md lg:text-lg text-slate-800">
            {name?.first} {name?.last}
          </h4>
          <p className="text-sm lg:text-md text-slate-600">
            {location?.country}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
