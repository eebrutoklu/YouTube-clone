import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import { api } from "../utils/api";

const Results = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search_query");

  useEffect(() => {
    setPage(1);

    const fetchData = async () => {
      const params = {
        query: query,
        page: page,
      };

      const response = await api.get(`/search`, { params });
      const responseData = response.data.data;

      setData((prevData) => [...prevData, ...responseData]);
    };

    fetchData();
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex gap-3">
      <SideBar />

      <div className="mx-auto h-[90vh] overflow-auto p-4">
        <h2 className="text-xl mb-5">
          <span className="font-bold">{query}</span> for results
        </h2>

        <div className="flex flex-col gap-5 justify-center">
          {data?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.id} video={item} isRow={true} />
              )
          )}

          <button
            onClick={loadMore}
            className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition"
          >
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
