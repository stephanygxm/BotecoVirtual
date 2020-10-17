import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import "../Footer/footer.css";
import imagem from "../../assets/imagens/logo/logo.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img className="logo" src={imagem} alt="logo" />
        <label for="btn" class="icon">
          <span class="fa fa-bars">&#9776;</span>
        </label>
        <input type="checkbox" id="btn" />
        <ul>
          <li>
            <Link id="link" to="/home">
              Home
            </Link>
            <Link id="link" to="/lista">
              Cervejas
            </Link>
            <Link id="link" to="/somos">
              Quem Somos
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
