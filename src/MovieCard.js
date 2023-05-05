import React from "react";
import "./MovieCard.css"
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
  return (
    
      <div class="hero-container">
		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src={movie.posterURL} class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">{movie.title}</h4>
					<p class="ticket__movie-slogan">
						{movie.description}
					</p>
					<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
					
				</div>
			</div>
		</div>

		{/* <div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="https://i.ibb.co/Zd51z5c/justice-league.jpg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Justice League</h4>
					<p class="ticket__movie-slogan">You can't save the world alone.</p>
					<p class="ticket__current-price">$20.75</p>
					<p class="ticket__old-price">$40.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div> */}
	</div>
    // </div>
  );
};

export default MovieCard;
