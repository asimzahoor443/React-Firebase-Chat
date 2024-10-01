import React, { useEffect } from "react";

const Loading = (props) => {
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userId = await localStorage.getItem("userId");
    if (userId !== null) {
      //   window.location.href = "/home";
    } else {
      //   window.location.href = "/login";
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
        <h2 className="text-2xl font-bold mt-6 text-gray-800">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
