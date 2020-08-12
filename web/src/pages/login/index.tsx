import React from "react";

import "./styles.css";
import logoImg from "../../assets/images/logo.svg";
import Input from '../../components/input/index';
import heart from '../../assets/images/icons/purple-heart.svg';
const login: React.FC = () => {
  return (
    <div id="page-login">
      <div className="screen-art">
        <img src={logoImg} />
        <strong>Sua plataforma de estudos online</strong>
      </div>
      <div className="login-area">
        <div>
          <div className="login-header">
            <strong>Fazer login</strong>
            <button>Criar uma conta</button>
          </div>
          <Input label="e-mail" text="" placeholder="E-mail"></Input>
          <Input label="password" text="" placeholder="Senha"></Input>
          <div className="login-footer">
            <div id="remember-text"> 
                <input type="checkbox" />Lembrar-me
            </div>
            <button id="forgot-pass">Esqueci minha senha</button>
          </div>
          <button id="submit">Entrar</button>
          <div className="web-footer">
              <div className="web-footer-line">
                  <strong>Não tem conta?</strong>
                  <div>É de graça <img src={heart}/></div>
              </div>
              <button>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
