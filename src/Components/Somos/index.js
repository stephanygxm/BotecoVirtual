import React, { Component } from "react";
import "./somos.css";
import Header from "../Header/index";
import Footer from "../../Components/Footer/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default class Card extends Component {
  state = {
    dataBase: [
      {
        nome: "Thuane Alves",
        cargo: "Development Front-End",
        imgPerf:
          "https://scontent.frec21-1.fna.fbcdn.net/v/t1.0-9/16195263_1321174747941827_3751069314224760590_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=WiXKOSYeTVYAX-QXonb&_nc_ht=scontent.frec21-1.fna&oh=510e4fa4ff9f13cde0dca4cb5d61c93b&oe=5F934486",
        gitUrl: "https://github.com/Thuane",
        LinkUrl: "https://www.linkedin.com/in/thuane-alves-159115180/",
        instUrl: "https://www.instagram.com/thuanealv_/",
        curriUrl: "https://thuanealves.000webhostapp.com/"
      },
      {
        nome: "João Victor",
        cargo: "Development Front-End",
        imgPerf:
          "https://media-exp1.licdn.com/dms/image/C4D03AQEXrfG5ZWgcjw/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=U3AbMewa16nMniiFfD5Azk5QtWGfAo5Vnj-ms5WTIW8",
        gitUrl: "https://github.com/joaoStart",
        LinkUrl: "https://www.linkedin.com/in/joao-victor-dev-front-end1",
        instUrl: "https://instagram.com/out_victor?igshid=1dm1nypr4vdz8",
        curriUrl: "https://curriculojoaovictor15.000webhostapp.com/"
      },
      {
        nome: "Cíntia Reis",
        cargo: "Development Front-End",
        imgPerf:
          "https://media-exp1.licdn.com/dms/image/C5603AQEH3mmrfP1HqQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=PgJLeexieYwSpGChxi5RJ4BF7CmzrGLpVvmmzI9JTc8",
        gitUrl: "https://github.com/cintiareis",
        LinkUrl: "https://www.linkedin.com/in/c%C3%ADntia-reis-668b241a0/",
        instUrl: "https://instagram.com/cintiadesantana_?igshid=jj190gdt5jgf",
        curriUrl: "https://cintiaweb.000webhostapp.com/"
      },
      {
        nome: "Stephany Xavier",
        cargo: "Development Front-End",
        imgPerf:
          "https://media-exp1.licdn.com/dms/image/C5603AQGLOoKO0GprFw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=NwaLnAGv3y6VetBhIxSABJ91QOJbSuR7-3E0qU0WLQ4",
        gitUrl: "https://github.com/stephanygxm",
        LinkUrl: "https://www.linkedin.com/in/stephany-muniz-126428185/",
        instUrl: "https://instagram.com/stephanygxm?igshid=1jtzgadgzewdh",
        curriUrl: "https://stephanygxm.000webhostapp.com/"
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <div id="container">
          {this.state.dataBase.map((dados, index) => (
            <div key={index} className="cardSomos">
              <section className="background-img">
                <img className="img" src={dados.imgPerf} alt="imagem" />
              </section>
              <h3>{dados.nome}</h3>
              <p className="styleP">{dados.cargo}</p>
              <section id="main-icons">
                <a
                  className="icon-rede"
                  href={dados.gitUrl}
                  title="GitHub"
                  target="_blanck"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="icon-rede"
                  href={dados.LinkUrl}
                  title="LinkedIn"
                  target="_blanck"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  className="icon-rede"
                  href={dados.instUrl}
                  title="Instagram"
                  target="_blanck"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="icon-rede"
                  href={dados.curriUrl}
                  title="Currículo"
                  target="_blanck"
                >
                  <FontAwesomeIcon icon={faFileAlt} />
                </a>
              </section>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
