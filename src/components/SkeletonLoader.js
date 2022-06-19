import React from "react";

const SkeletonLoader = () => {
  return (
    <>
      <div className="animate-pulse flex gap-4 items-center w-fit mx-auto -z-50 mb-5 p-4">
        <div className="rounded-full bg-slate-200 h-12 w-12"></div>
        <div className="flex flex-col gap-3">
          <div className="h-2 text-md lg:text-lg bg-slate-200 rounded w-[180px]"></div>
          <p className="h-1 text-sm lg:text-md bg-slate-200 rounded w-[100px]"></p>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;
