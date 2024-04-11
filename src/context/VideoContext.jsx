import { createContext, useEffect, useState } from "react";
import { categories } from "../constans";
import { api } from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [video, setVideo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const type = selectedCategory.type;
    setIsLoading(true);

    if (type === "menu") return;

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `search?query=${selectedCategory.name}`
        : "";

    api
      .get(url)
      .then((res) => setVideo(res.data.data)) // setVideo fonksiyonunu çağırarak video verisini atayın
      .catch((error) => setError(error.mesage))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        video,
        setVideo,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
