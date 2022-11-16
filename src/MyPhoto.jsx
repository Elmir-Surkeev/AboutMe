import React from "react";
import Photo from "./UI/myPhoto.jpg";
import Photo2 from "./UI/second.jpg";
import Photo3 from "./UI/third.jpg";
import Photo4 from "./UI/fourth.jpg";
import Photo5 from "./UI/fifth.jpg";
import Photo6 from "./UI/sixth.jpg";
// var mid = document.getElementById("smena-snimka");
// var mid_off = mid.offsetTop - 150;
// window.addEventListener("scroll", function () {
//   if (
//     document.body.scrollTop > mid_off ||
//     document.documentElement.scrollTop > mid_off
//   ) {
//     mid.classList.remove("smena-snimka-1");
//     mid.classList.add("smena-snimka-2");
//   } else {
//     mid.classList.remove("smena-snimka-2");
//     mid.classList.add("smena-snimka-1");
//   }
// });
const MyPhoto = () => {
  return (
    <div className="main-picture-change">
      <img src={Photo2} className="myPhoto" />
    </div>
  );
};

export default MyPhoto;

{
  /* //   return (
  //     <div className="main-picture-change">
        // <img className="myPhoto" src={Photo} alt="My photo" />
  //     </div>
  //   ) */
}
