import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./styles.css";
import heroImg from "../../assets/images/landing.svg";
import logoImg from "../../assets/images/logo.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import lectureIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import api from "../../services/api";
export default () => {
  const [totalConnections,setTotalConnections] = useState('');
  api.get('connections').then(res=>setTotalConnections(res.data.totalConnections));
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={heroImg} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="study icon"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-lecture">
            <img src={lectureIcon} alt="lecture icon"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeart} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};
