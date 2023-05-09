import React from "react";
import { useParams, Link } from "react-router-dom";
export const Details = ({ movie }) => {
  const { id } = useParams();
  const foundMovie = movie.find((el) => el.id === +id);
  return (
    <div style={{ display: "block" }}>
      <h1 style={{ fontSize: 50, textAlign: "center" }}>{foundMovie.title}</h1>
      <p style={{ fontSize: 25, textAlign: "left" }}>
        {foundMovie.description}
      </p>

      <iframe
        width="560"
        height="315"
        src={foundMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <Link to="/">
        {" "}
        <button> Back </button>
      </Link>
    </div>
  );
};
