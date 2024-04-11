import React, { useContext } from "react";
import { categories } from "../constans";
import { VideoContext } from "../context/VideoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);
  return (
    <div className="flex flex-col p-1">
      {categories.map((i) => (
        <div onClick={() => setSelectedCategory(i)} key={i.name}>
          <div
            style={{
              background: selectedCategory.name === i.name && "#374151",
            }}
            className="flex gap-2 max-sm:py-3 px-2 items-center py-[10px] cursor-pointer rounded-md hover:bg-gray-700"
          >
            <span className="max-sm:text-xl"> {i.icon} </span>
            <span className="max-sm:hidden text-md"> {i.name}</span>
          </div>
          {i.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
