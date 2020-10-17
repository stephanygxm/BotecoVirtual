import React, { Component } from "react";
import axios from "axios";
import "./lista.css";

import ListItem from "../ListaItem/listaItem";
import Button from "../Botao/botao";
import Header from "../Header/index";
import { Link } from "react-router-dom";

class Lista extends Component {
  state = {
    allBeers: [],
    min: 0,
    max: 50   
  };

  componentDidMount() {
    this.getBeers();
  }
  getBeers = async () => {
    const response = await axios.get(`https://api.punkapi.com/v2/beers`);
    const allBeers = response.data;
    this.setState({ allBeers });
  };

  filterBeers(min, max) {
    this.setState({ min, max });
  }

 

  render() {
    const { allBeers = [], min, max } = this.state;
    const filterBeers = allBeers.filter(
      (beers) => beers.abv >= min && beers.abv <= max
    );

    return (
      <div>
        <Header />
        <div>
          <ul className="button-filter">
            <Button
              className={0 <= min && 50 >= max ? "active-item" : ""}
              name="Todas"
              onClick={() => this.filterBeers(0, 50)}
            />
            <Button
              className={0 >= min && 4.5 <= max ? "active-item" : ""}
              name="0% - 4.5% "
              onClick={() => this.filterBeers(0, 4.5)}
            />
            <Button
              className={4.6 >= min && 7.5 <= max ? "active-item" : ""}
              name="4.6% - 7.5% "
              onClick={() => this.filterBeers(4.6, 7.5)}
            />
            <Button
              className={7.6 >= min && 50 <= max ? "active-item" : ""}
              name="7.6% - 50% "
              onClick={() => this.filterBeers(7.6, 50)}
            />
          </ul>
          <div className="centered">
            <ul className="cards">
              {filterBeers.map((beers) => (
                <ListItem
                  key={beers.id}
                  img={beers.image_url}
                  name={beers.name}
                  description={beers.tagline}
                  link={beers.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Lista;
