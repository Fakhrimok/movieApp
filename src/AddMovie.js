import React from "react";
import { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ addNewMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rate: 1,
  });
  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    addNewMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rate: 1 });
  };

  return (
    <div>
      <a href="#modal-opened" style={{ position: "fixed", top: 250, right: 50 }}
 class="link-1" id="modal-closed">
        Add a Movie
      </a>

      <div class="modal-container" id="modal-opened">
        <div class="modal">
          <div class="modal__details">
            <h1
              class="modal__title"
            >
              Add a Movie
            </h1>
            {/* <p class="modal__description">Sentence that will tell user what this modal is for or something.</p> */}
          </div>

          {/* <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p> */}
          <form >
            <div>{/* <h3>Add a Movie</h3> */}</div>
            <div >
              <input class="modal__btn"
              style={{color:"black", backgroundColor:"white", margin:5}}
                type="text"
                name="title"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <input class="modal__btn"
               style={{color:"black", backgroundColor:"white", margin:5}}
                type="text"
                name="description"
                placeholder="description"
                value={newMovie.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <input class="modal__btn"
               style={{color:"black", backgroundColor:"white", margin:5}}
                type="number"
                name="rate"
                placeholder="rate"
                min="1"
                max="5"
                value={newMovie.rate}
                onChange={handleChange}
              />
            </div>
            <div>
              <input class="modal__btn"
               style={{color:"black", backgroundColor:"white", margin:5}}
                type="url"
                name="posterURL"
                placeholder="PosterURL"
                value={newMovie.posterURL}
                onChange={handleChange}
              />
            </div>
            <div>
              <button class="modal__btn" onClick={handleSubmit}>
                Submit Contact
              </button>
            </div>
          </form>

          <a href="#modal-closed" class="link-2"></a>
        </div>
      </div>

      {/* <a href="https://codepen.io/AbubakerSaeed/full/eYOvKpY" class="second-version-link" target="_blank">CSS Modals (Modal v2)</a> */}

      {/* <a href="https://abubakersaeed.netlify.app/designs/d7-modal" class="abs-site-link" rel="nofollow noreferrer" target="_blank">abs/designs/d7-modal</a> */}
    </div>
  );
};

export default AddMovie;
