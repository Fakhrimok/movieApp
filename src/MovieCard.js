import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div class="hero-container">
      <div class="main-container">
        <div class="poster-container">
          <a href="#">
            <img src={movie.posterURL} class="poster" />
          </a>
        </div>
        <div class="ticket-container">
          <div class="ticket__content">
            <h4 class="ticket__movie-title">{movie.title}</h4>
            <p class="ticket__movie-slogan">{movie.description}</p>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
            <Link to={`/movie/${movie.id}`}>
              <button class="ticket__buy-btn">Trailer</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
