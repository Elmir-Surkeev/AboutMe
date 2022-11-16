import React from "react";
import Photo from "./UI/myPhoto.jpg";
import Photo2 from "./UI/second.jpg";
import Photo3 from "./UI/third.jpg";
import Photo4 from "./UI/fourth.jpg";
import Photo5 from "./UI/fifth.jpg";
import Photo6 from "./UI/sixth.jpg";

const MyPhoto = () => {
  return (
    <div className="main-picture-change">
      <img src={Photo2} className="myPhoto" />
    </div>
  );
};
export default MyPhoto;
