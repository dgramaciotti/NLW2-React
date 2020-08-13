import React from 'react';
import './styles.css';
import logoImg from "../../assets/images/logo.svg";
const screenArt: React.FC = () => {
  return (
    <div className="screen-art">
        <img src={logoImg} />
        <strong>Sua plataforma de estudos online</strong>
    </div>
  )
}

export default screenArt;