import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Header from "../Header";
import "./home.css";

import slide1 from "../../assets/imagens/carousel/svg1.svg";
import slide2 from "../../assets/imagens/carousel/svg2.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel autoPlay>
          <div>
            <img alt="slide1" src={slide1} />
          </div>
          <div>
            <img alt="slide2" src={slide2} />
          </div>
        </Carousel>
      </div>
    );
  }
}
