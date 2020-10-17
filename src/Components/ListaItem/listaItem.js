import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

const handleClick = () => {
  alert("Click");
};

const ListItem = (props) => (
  <div key={props.id}>
    <div className="card-new">
      <div className="card_image">
        <img className="imagem_card" src={props.img} alt="image_api" />
      </div>
      <h2 className="card_title">{props.name}</h2>
      <Link to={`/card${props.link}`}>
        <button className="button-see-more">Ver mais</button>
      </Link>
    </div>
  </div>
);

export default ListItem;
