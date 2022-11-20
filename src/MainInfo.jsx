import React from "react";

const MainInfo = (props) => {
  return (
    <div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
    </div>
  );
};
export default MainInfo;
