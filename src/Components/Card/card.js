import React, { Component } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/index";

class Card extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    this.getBeer();
  }
  getBeer = async () => {
    const id = this.props.match.params.id;
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

    this.setState({ beer: response.data });
  };
  render() {
    const { beer } = this.state;

    return (
      <div>
        <Header />
        <div className="center">
          {beer.map((cerv) => (
            <div className="card-description" key={cerv.id}>
              <h1 className="beer-name">{cerv.name}</h1>
              <div className="card-beer">
                <div className="aside-beer-image">
                  <img
                    className="beer-image"
                    src={cerv.image_url}
                    alt={cerv.name}
                  />
                </div>
                <div className="aside-beer">
                  <p className="beer-description">
                    First Brewed: {cerv.first_brewed}
                  </p>
                  <p className="beer-description">
                    Decription: {cerv.description}
                  </p>

                  <p className="beer-description">
                    Brewers Tips: {cerv.brewers_tips}
                  </p>
                </div>
              </div>
              <Link to={"/lista"}>
                <button className="button-return">Voltar</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
