import React from "react";
import firstPhoto from "./UI/1.jpg";
import thirdPhoto from "./UI/4.jpg";
import secondPhoto from "./UI/2.jpg";
import fourPhoto from "./UI/5.jpg";
import "./styles/gallery.css";
const Gallery = () => {
  return (
    <div className="block">
      <div className="photo deletedPhotos">
        <img src={firstPhoto} alt="Jashtar Parlamenty" />
      </div>
      <div className="photo deletedPhotos">
        <img src={secondPhoto} alt="Jashtar Parlamenty" />
      </div>
      <div className="photo">
        <img src={thirdPhoto} alt="Jashtar Parlamenty" />
      </div>
      <div className="photo deletedPhotos">
        <img src={fourPhoto} alt="Jashtar Parlamenty" />
      </div>
    </div>
  );
};

export default Gallery;
