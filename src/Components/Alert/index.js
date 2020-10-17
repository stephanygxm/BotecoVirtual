import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./alert.css";

import Logo from "../../assets/imagens/logo/logo.svg";

export default class Alert extends Component {
  direcionarTelaMenorIdade() {
    window.location.href =
      "https://silveiradias.adv.br/ao-menor-de-18-anos-nao-e-permitido-o-fornecimento-de-bebida-alcoolica/";
  }

  componentDidMount() {
    this.confirmDialog();
  }

  confirmDialog = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="react-confirm-alert-body">
            <img
              className="react-confirm-alert-img-logo"
              src={Logo}
              alt="logo"
            />
            <h1>Seja bem-vindo ao boteco virtual!</h1>
            <p>Você tem mais de 18 anos?</p>
            <div className="react-confirm-alert-button-group">
              <button onClick={onClose}>Sim</button>
              <button onClick={this.direcionarTelaMenorIdade}>Não</button>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return <div className="container"></div>;
  }
}
