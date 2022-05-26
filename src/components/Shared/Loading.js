import React from "react";

const Loading = () => {
  return (
    <div className="container flex h-screen justify-center items-center">
      <div
        className="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loading;
