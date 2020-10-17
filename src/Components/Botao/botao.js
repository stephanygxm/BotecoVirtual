import React from "react";

const Button = ({ className = "", onClick, name }) => (
  <li>
    <button className={`buttons-from-filter ${className}`} onClick={onClick}>
      {name}
    </button>
  </li>
);

export default Button;
