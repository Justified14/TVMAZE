import { useRef } from "react";
import { Link } from "react-router-dom";
import Spinner from "../utils/Spinner";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import LowerMediaCard from "./LowerMediaCard";

export default function LowerContent({ data, error, loading }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    direction === "left"
      ? (current.scrollLeft -= 1000)
      : (current.scrollLeft += 1000);
  };
  const FindTv = data.filter((accessMovie) => accessMovie.rating.average >= 5);
  console.log(FindTv);
  return (
    <>
      <div className="mt-5">
        <Link to="/tvshows">
          <h5 className="text-dark mt-5 p-2">TOP RATING</h5>
        </Link>
      </div>
      <div className="mt-2">
        <div className="position-relative p-3">
          <div ref={scrollRef} className="d-flex boxContent scrollbody">
            {loading && <Spinner />}
            {error ||
              (FindTv && (
                <>
                  {error && <p>Currently Unavailable</p>}

                  {FindTv.map((scriptedtv) => (
                    <LowerMediaCard key={scriptedtv.id} {...scriptedtv} />
                  ))}
                </>
              ))}
          </div>
          <div
            className="justify-content-between align-items-center w-100 position-absolute d-none d-md-flex"
            style={{ top: "25%" }}
          >
            <IoMdArrowDropleftCircle
              className="text-white"
              size="3.2rem"
              style={{ cursor: "pointer" }}
              onClick={() => scroll("left")}
            />
            <IoMdArrowDroprightCircle
              className="text-white"
              size="3.2rem"
              style={{ cursor: "pointer" }}
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
