import React from "react";
import "../styles/button.css";
const Button = (props) => {
  return (
    <div>
      <Button>{props.btn_text}</Button>
    </div>
  );
};

export default Button;
