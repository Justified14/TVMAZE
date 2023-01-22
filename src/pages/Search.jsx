import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from "../utils/Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Mediacard from "../Components/Mediacard";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterResult, setFilterResult] = useState([]);

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      setLoading(true);
      try {
        const results = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        setFilterResult(results.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 2000);
    return () => clearTimeout(getSearch);
  }, [query]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container-xl mx-auto py-5" style={{ marginTop: "7rem" }}>
      <div className="position-relative h4 pb-2 mb-4 border-bottom border-dark">
        <input
          className="small w-100 no-outline border-0"
          id="search"
          type="text"
          placeholder="SEARCH MOVIES"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className="position-absolute end-0"
            onClick={() => setQuery("")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {query.length > 0 && filterResult <= 0 && (<p>NO SEARCH MATCH</p>)}
      {(error || filterResult) && (
        <>
          {error && <p>{error.message}</p>}

          {filterResult && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 6 }}
              className="mt-5"
            >
              <Masonry gutter="30px">
                {filterResult.map((movies) => (
                  <Mediacard key={movies.show.id} {...movies.show} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </>
      )}
    </div>
  );
}
