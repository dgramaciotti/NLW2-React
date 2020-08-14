import React from "react";

import "./styles.css";
import Input from '../../components/input/index';
import heart from '../../assets/images/icons/purple-heart.svg';
import ScreenArt from '../../components/screenArt/index';
import {Link} from 'react-router-dom';
const login: React.FC = () => {
  return (
    <div id="page-login">
      <ScreenArt></ScreenArt>
      <div className="login-area">
        <div className="login-block">
          <div className="login-header">
            <strong>Fazer login</strong>´
            <Link to="/signup">
              <button>Criar uma conta</button>
            </Link>
          </div>
          <Input label="e-mail" text="" placeholder="E-mail"></Input>
          <Input label="password" text="" placeholder="Senha"></Input>
          <div className="login-footer">
            <div id="remember-text"> 
                <input type="checkbox" />Lembrar-me
            </div>
            <Link to="/forgot-my-pass">
              <button id="forgot-pass">Esqueci minha senha</button>
            </Link>
          </div>
          <button id="submit">Entrar</button>
        </div>
        <div className="web-footer">
              <div className="web-footer-line">
                  <strong>Não tem conta?</strong>
                  <div>É de graça<img src={heart}/></div>
              </div>
              <Link to="/signup">
                <button>Cadastre-se</button>
              </Link>
          </div>
      </div>
    </div>
  );
};

export default login;
