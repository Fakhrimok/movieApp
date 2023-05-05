import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import "./AddMovie.css";


const Search = ({getInput, getRate,rating }) => {
  const onStarClick=(nextValue)=> {
    getRate(nextValue);
  }

  return (
    <div style={{position: "fixed", top: 150, right: 10, marginTop: 10, }}>
      
        <input 
        className='modal__btn'
        style={{ 
        width: 200, height:30, marginRight:30 ,borderColor: "black", marginButtom:20 }}
        type="search"
        placeholder="Search Movie Name"
        onChange={(e) => getInput(e.target.value)}
      /><br></br>
      <StarRatingComponent style={{ fontSize: 50
           }}
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />

    </div>

  )
}

export default Search