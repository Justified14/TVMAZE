import React from "react";
import { Link } from "react-router-dom";

export default function LowerMediaCard({ id, image, genres, name }) {
  return (
    <div className="me-4 mb-2">
      <Link to={`/tvshows/${id}`}>
        <div className="LowerMediaCard" style={{ height: "170px" }}>
          <img
            className="w-100 h-100 rounded-3"
            src={image.original}
            alt={name}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="w-100" style={{ height: "96px" }}>
        <Link to={`/tvshows/${id}`}>
          <>
            <p className="text-dark fw-bold mb-0">{name}</p>
            <p className="text-dark">{genres.join("  .  ")} </p>
          </>
        </Link>
      </div>
    </div>
  );
}
