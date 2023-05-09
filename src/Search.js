import React from "react";
import StarRatingComponent from "react-star-rating-component";
import "./AddMovie.css";

const Search = ({ getInput, getRate, rating }) => {
  const onStarClick = (nextValue) => {
    getRate(nextValue);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 150,
        right: 10,
        marginTop: 10,
        fontSize: "30px",
      }}
    >
      <input
        className="modal__btn"
        style={{
          borderColor: "black",
        }}
        type="search"
        placeholder="Search Movie Name"
        onChange={(e) => getInput(e.target.value)}
      />
      <br></br>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
};

export default Search;
