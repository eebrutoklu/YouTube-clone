import React from "react";

const ErrrorDisplay = ({ error }) => {
  return (
    <div>
      <div className="bg-red-500 h-fit flex flex-fol rounded p-4 ">
        <h2>{error}</h2>
        <span className="text-lg">
          Sorry, an unexpected error occurred. Then try again.{" "}
        </span>
      </div>
    </div>
  );
};

export default ErrrorDisplay;
